const STORAGE_KEY = 'tasks';

class LocalStorageService {
  loadTasks = () => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);

      const tasks = JSON.parse(stored);

      return Array.isArray(tasks) ? tasks : [];
    } catch (error) {
      console.error('Не удалось загрузить задачи:', error);
      return fallback;
    }
  };

  saveTasks = tasks => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch (error) {
      console.error('Не удалось сохранить задачи:', error);
    }
  };
}

export const localStorageService = new LocalStorageService();
