import { Checkbox } from "@/components/ui/checkbox";

export function Category() {
  return (
    <div>
      <h2> Filter Results</h2>
      <ul>
        <li>
          <Checkbox />
          <label htmlFor="Essential oil"> Essential oil </label>
        </li>
        <li>
          <Checkbox />
          <label htmlFor="raw material"> Raw Material</label>
        </li>
        <li>
          <Checkbox />
          <label htmlFor="spices"> SPices </label>
        </li>
      </ul>
    </div>
  );
}
