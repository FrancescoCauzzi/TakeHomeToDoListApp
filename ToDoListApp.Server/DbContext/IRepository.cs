using ToDoListApp.Server.Entities;

namespace ToDoListApp.Server.DbContext
{
    public interface IRepository<T>
    {
        // Get all entities
        DataOperationResult<List<T>> GetAll();

        // Get a single entity by ID
        DataOperationResult<T> GetEntityById(Guid id);

        // Add entity
        OperationResult AddEntity(T entity);

        // Modify Entity
        OperationResult ModifyEntity(Guid id, T entity);

        // Delete an entity
        OperationResult DeleteEntity(Guid id);
        
    }
}
