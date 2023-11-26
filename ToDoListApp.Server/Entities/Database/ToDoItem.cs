namespace ToDoListApp.Server.Entities.Database
{
    public class ToDoItem
    {
        public Guid Id { get; set; }
        public string Title { get; set; } = "";
        public string Content { get; set; } = "";
    }
}
