import Card from "../ui/Card";
import styles from "./NewMeetupForm.module.css";
import { useRef } from "react";

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descInputRef = useRef();

  function submitHandler(e) {
    e.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDesc = descInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      desc: enteredDesc,
    };
    props.onAddMeetup(meetupData);
    console.log(meetupData);
  }

  return (
    <Card>
      <form action="" className={styles.form} onSubmit={submitHandler}>
        <div className={styles.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="address">Meetup Address</label>
          <input type="address" required id="address" ref={addressInputRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="desc">Meetup desc</label>
          <textarea
            name=""
            id="desc"
            cols="10"
            rows="5"
            ref={descInputRef}
            required
          ></textarea>
        </div>
        <div className={styles.actions}>
          <button>Add meetup</button>
        </div>
      </form>
    </Card>
  );
}
export default NewMeetupForm;
