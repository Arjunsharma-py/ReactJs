import { useForm } from "react-hook-form";

export type Input = {
  message: string;
};

interface Props {
  onSendMessage: (newMessage: string) => void;
}

const PromptForm = ({ onSendMessage }: Props) => {
  const { register, handleSubmit, reset } = useForm<Input>();

  const handleMessageSubmit = (data: Input) => {
    onSendMessage(data.message);
    reset();
  };

  return (
    <>
      <div className="prompt-form-section">
        <form
          onSubmit={handleSubmit(handleMessageSubmit)}
          className="prompt-form"
        >
          <input
            type="text"
            id="message"
            {...register("message", { required: true })}
            placeholder="Ask a question!"
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </>
  );
};

export default PromptForm;
