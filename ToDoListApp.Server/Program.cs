using Microsoft.EntityFrameworkCore;
using ToDoListApp.Server.DbContext;
using ToDoListApp.Server.Entities.Database;

namespace ToDoListApp.Server
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();

            builder.Services.AddEndpointsApiExplorer();

            builder.Services.AddSwaggerGen();

            builder.Services.AddDbContext<ToDoListAppDbContext>(options =>
            {
                options.UseNpgsql(builder.Configuration.GetConnectionString("TodoListConnectionString"));
            });

            // Add CORS policy to avoid error messages in cross-origin requests when communicating with a front-end app
            builder.Services.AddCors(options =>
            {
                options.AddPolicy("AllowSpecificOrigin",
                    builder => builder.WithOrigins("https://localhost:4200")
                                      .AllowAnyHeader().AllowAnyOrigin().AllowAnyMethod()
                                      );
            });

            // DEPENDENCY INJECTIONS
            // DI for the database
            builder.Services.AddScoped<ToDoListAppDbContext, ToDoListAppDbContext>();

            // DI repository pattern ToDoItem
            builder.Services.AddScoped<IRepository<ToDoItem>, RepositoryToDoItem>();

            var app = builder.Build();

            app.UseDefaultFiles();
            app.UseStaticFiles();

            // Apply the CORS policy
            app.UseCors("AllowSpecificOrigin");

            // Configure the HTTP request pipeline.

            app.UseHttpsRedirection();

            app.UseAuthorization();

            app.MapControllers();

            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.MapFallbackToFile("/index.html");

            

            app.Run();
        }
    }
}
