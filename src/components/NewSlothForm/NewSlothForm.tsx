import "./NewSlothForm.css";

const NewSlothForm = (): React.ReactElement => {
  return (
    <form className="form">
      <label htmlFor="name">Name: </label>
      <input id="name" className="new-form__control" type="text" />
      <label htmlFor="Picture URL">Picture URL: </label>
      <input id="Picture URL" className="new-form__control" type="URL" />
      <label htmlFor="fingers">Fingers: </label>
      <input id="fingers" className="new-form__control" type="number" />
      <button type="submit">Create</button>
    </form>
  );
};

export default NewSlothForm;
