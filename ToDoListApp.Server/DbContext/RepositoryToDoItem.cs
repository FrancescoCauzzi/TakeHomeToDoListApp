using Microsoft.EntityFrameworkCore;
using ToDoListApp.Server.Entities;
using ToDoListApp.Server.Entities.Database;

namespace ToDoListApp.Server.DbContext
{
    public class RepositoryToDoItem : IRepository<ToDoItem>
    {
        private ToDoListAppDbContext _db;

        public RepositoryToDoItem(ToDoListAppDbContext myDb)
        {
            _db = myDb;
        }
        public DataOperationResult<ToDoItem> AddEntity(ToDoItem entity)
        {
            try
            {
                ToDoItem toDoItem = new()
                {
                    Title = entity.Title,
                    Content = entity.Content,
                };

                _db.ToDoItems.Add(toDoItem);
                _db.SaveChanges();

                return new DataOperationResult<ToDoItem>(true, "Item added successfully.", toDoItem);
            }
            catch (Exception ex)
            {
                // Log the exception
                // Example: _logger.LogError(ex, "Error adding new ToDoItem");

                return new DataOperationResult<ToDoItem>(false, "An error occurred while adding the item.");
            }
        }


        public OperationResult DeleteEntity(int id)
        {
            try
            {
                ToDoItem? itemToDelete = _db.ToDoItems.FirstOrDefault(p => p.Id == id);

                if (itemToDelete == null)
                {
                    return new OperationResult(false, "Item not found.");
                }

                _db.ToDoItems.Remove(itemToDelete);
                _db.SaveChanges();

                return new OperationResult(true, "Item deleted successfully.");
            }
            catch (Exception ex)
            {
                // Log the exception
                // Example: _logger.LogError(ex, "Error deleting ToDoItem with ID {ItemId}", id);

                return new OperationResult(false, "An error occurred while deleting the item.");
            }
        }


        public DataOperationResult<List<ToDoItem>> GetAll()
        {
            try
            {
                var items = _db.ToDoItems.ToList();
                return new DataOperationResult<List<ToDoItem>>(true, "Items retrieved successfully.", items);
            }
            catch (Exception ex)
            {
                // Log the exception
                // Example: _logger.LogError(ex, "Error retrieving all ToDoItems");

                return new DataOperationResult<List<ToDoItem>>(false, "An error occurred while retrieving items.", null);
            }
        }

        public DataOperationResult<ToDoItem> GetEntityById(int id)
        {
            try
            {
                var item = _db.ToDoItems.FirstOrDefault(p => p.Id == id);
                if (item == null)
                {
                    return new DataOperationResult<ToDoItem>(false, "Item not found.", null);
                }

                return new DataOperationResult<ToDoItem>(true, "Item retrieved successfully.", item);
            }
            catch (Exception ex)
            {
                // Log the exception
                // Example: _logger.LogError(ex, "Error retrieving ToDoItem with ID {ItemId}", id);

                return new DataOperationResult<ToDoItem>(false, "An error occurred while retrieving the item.", null);
            }
        }
        

        public OperationResult ModifyEntity(int id, ToDoItem modifiedItem)
        {
            try
            {
                ToDoItem? itemToUpdate = _db.ToDoItems.FirstOrDefault(item => item.Id == id);
                if (itemToUpdate == null)
                {
                    return new OperationResult(false, "Item not found.");
                }

                itemToUpdate.Title = modifiedItem.Title;
                itemToUpdate.Content = modifiedItem.Content;

                _db.SaveChanges();
                return new OperationResult(true, "Item updated successfully.");
            }
            catch (Exception ex)
            {
                // Log the exception
                // Example: _logger.LogError(ex, "Error updating ToDoItem with ID {ItemId}", id);

                return new OperationResult(false, "An error occurred while updating the item.");
            }

        }
    }
}
