namespace ToDoListApp.Server.Entities
{
    public class DataOperationResult<T>
    {
        public bool Success { get; set; }
        public string Message { get; set; }
        public T Data { get; set; }

        public DataOperationResult(bool success, string message, T data = default)
        {
            Success = success;
            Message = message;
            Data = data;
        }
    }

}
