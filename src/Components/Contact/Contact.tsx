import { Button, Form, Input, message } from "antd";
import { useState } from "react";
import * as Styles from "./ContactStyles";
function Contact() {
  const { TextArea } = Input;
  const { Item } = Form;

  const [name, setName] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [messageForMe, setMessageForMe] = useState<string>("");
  const [flag, setFlag] = useState<boolean>(false);

  const onFormSubmit = () => {
    if (name && subject && location && messageForMe) {
      setFlag(true);
      return;
    }
    message.info("Each field are Required");
    setFlag(false);
  };
  return (
    <Styles.Container id="contact">
      <div className="body">
        <div>
          <h1>Get in Touch</h1>
          <p>
            If you have any questions, please feel free to drop a line. If you
            do not get an answer immeditely, I might just be travelling or busy
            in important work. I will get back to you as soon as I can. That's a
            promise!
          </p>
        </div>
        <div>
          <Form layout="vertical" className="form">
            <Input
              placeholder="Your Name"
              onChange={(data) => setName(data.target.value)}
            />
            <Input
              placeholder="Where you Located"
              onChange={(data) => setLocation(data.target.value)}
            />
            <Input
              placeholder="Subject"
              onChange={(data) => setSubject(data.target.value)}
            />
            <TextArea
              rows={4}
              placeholder="Message"
              showCount
              maxLength={250}
              onChange={(data) => setMessageForMe(data.target.value)}
            />
            <Item>
              <Button
                type="primary"
                onClick={onFormSubmit}
                href={
                  flag
                    ? `mailto: akashpatel10000@gmail.com?subject=${subject}&body=${
                        "Name: " +
                        name +
                        "%0D" +
                        "From: " +
                        location +
                        "%0D%0D" +
                        messageForMe +
                        "%0D"
                      }`
                    : undefined
                }
              >
                Submit
              </Button>
            </Item>
          </Form>
        </div>
      </div>
    </Styles.Container>
  );
}

export default Contact;
