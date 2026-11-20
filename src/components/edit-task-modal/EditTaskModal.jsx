import { useId } from 'react';
import classes from './styles.module.scss';
import { Modal } from '@/components/modal';

export const EditTaskModal = ({ editableTask, visible, setVisible, changeTask }) => {
  const titleId = useId();
  const descId = useId();

  const editTaskFromForm = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get('title');
    const description = formData.get('description');

    if (title?.trim() === '') {
      alert('Поле "Название задачи" должно быть заполнено');
      return;
    }

    setVisible(false);
    changeTask(editableTask.id, { title, description });
  };

  return (
    <Modal visible={visible} toggleVisibility={() => setVisible(!visible)} title="Редактирование задачи">
      <form className={classes.editForm} onSubmit={editTaskFromForm}>
        <div className={classes.editForm__fieldWrapper}>
          <label htmlFor={titleId} className={classes.editForm__fieldLabel}>
            Название задачи
          </label>
          <input id={titleId} name="title" defaultValue={editableTask?.title} />
        </div>
        <div className={classes.editForm__fieldWrapper}>
          <label htmlFor={descId} className={classes.editForm__fieldLabel}>
            Описание (необязательно)
          </label>
          <textarea id={descId} name="description" defaultValue={editableTask?.description} />
        </div>
        <button className="default-button" type="submit">
          Изменить
        </button>
      </form>
    </Modal>
  );
};
