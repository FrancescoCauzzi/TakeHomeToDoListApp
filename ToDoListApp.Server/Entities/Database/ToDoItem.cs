using System.ComponentModel.DataAnnotations;

namespace ToDoListApp.Server.Entities.Database
{
    public class ToDoItem
    {

        [Key]
        public int Id { get; set; } // Now an auto-incrementing integer
        public string Title { get; set; } // No default value assigned
        public string Content { get; set; } // No default value assigned
        
    }
}
