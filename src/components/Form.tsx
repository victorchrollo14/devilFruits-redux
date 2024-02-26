import { useForm, SubmitHandler } from "react-hook-form";
import { devilFruitType, insertFruit } from "../redux/fruitsReducer";
import { useAppDispatch } from "../redux/hooks";

export const Form = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm<devilFruitType>();

  const onSubmit: SubmitHandler<devilFruitType> = (data) => {
    data.id = crypto.randomUUID();
    dispatch(insertFruit(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Add New Devil Fruit</h2>
      <label htmlFor="fruitName">Name:</label>
      <input
        {...register("name")}
        type="text"
        id="fruitName"
        name="name"
        placeholder="Enter the name"
        required
      />

      <label htmlFor="fruitType">Type:</label>
      <select {...register("type")} id="fruitType" name="type" required>
        <option value="Paramecia">Paramecia</option>
        <option value="Logia">Logia</option>
        <option value="Zoan">Zoan</option>
      </select>
      <label htmlFor="englishName">English Name</label>
      <input
        {...register("englishName")}
        id="englishName"
        name="englishName"
        placeholder="Enter English Name"
        required
      />

      <label htmlFor="fruitAbilities">Abilities:</label>
      <textarea
        {...register("abilities")}
        id="fruitAbilities"
        name="abilities"
        placeholder="Enter the abilities"
        required
      ></textarea>

      <label htmlFor="fruitUsers">Users:</label>
      <input
        {...register("users")}
        type="text"
        id="fruitUsers"
        name="users"
        placeholder="Enter users separated by commas"
        required
      />

      <label htmlFor="fruitDescription">Description:</label>
      <textarea
        {...register("description")}
        id="fruitDescription"
        name="description"
        placeholder="Enter the description"
        required
      ></textarea>

      <button type="submit">Add Devil Fruit</button>
    </form>
  );
};
