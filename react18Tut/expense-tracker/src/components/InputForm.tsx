import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import categories from "../Categories";

// interface itemsStructure{
//   id: number,
//   desc: string,

// }

const schema = z.object({
  desc: z
    .string()
    .min(3, { message: "Description should be at least 3 characters." })
    .max(50),
  amount: z
    .number({ invalid_type_error: "Amount is required." })
    .min(0.01)
    .max(100_000),
  ctg: z.enum(categories, {
    errorMap: () => ({ message: "Category is required" }),
  }),
});

type FormData = z.infer<typeof schema>;

interface Props {
  onAdd: (data: FormData) => void;
}

const InputForm = ({ onAdd }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  return (
    <>
      <form
        onSubmit={handleSubmit((data) => {
          onAdd(data);
          reset();
        })}
      >
        <div className="mt-3 mb-3">
          <label htmlFor="discription" className="form-label">
            Discription
          </label>
          <input
            {...register("desc")}
            id="desc"
            type="text"
            className="form-control"
          />
          {errors.desc && <p className="text-danger">{errors.desc.message}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            {...register("amount", { valueAsNumber: true })}
            id="amount"
            type="number"
            className="form-control"
          />
          {errors.amount && (
            <p className="text-danger">{errors.amount.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Categories
          </label>
          <select
            defaultValue={""}
            {...register("ctg")}
            id="ctg"
            className="form-select"
          >
            <option value=""></option>
            {categories.map((e) => (
              <option key={e} value={e}>
                {e}
              </option>
            ))}
          </select>
          {errors.ctg && <p className="text-danger">{errors.ctg.message}</p>}
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </>
  );
};

export default InputForm;
