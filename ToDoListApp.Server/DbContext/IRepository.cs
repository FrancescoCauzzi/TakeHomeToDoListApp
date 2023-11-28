using ToDoListApp.Server.Entities;

namespace ToDoListApp.Server.DbContext
{
    public interface IRepository<T>
    {
        // Get all entities
        DataOperationResult<List<T>> GetAll();

        // Get a single entity by ID
        DataOperationResult<T> GetEntityById(int id);

        // Add entity
        DataOperationResult<T> AddEntity(T entity);

        // Modify Entity
        OperationResult ModifyEntity(int id, T entity);

        // Delete an entity
        OperationResult DeleteEntity(int id);
        
    }
}
