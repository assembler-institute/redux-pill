import { formatMoney } from "../../utils/formatMoney";

interface Props {
  options: Array<number>;
  name: string;
  priceFormat?: boolean;
  handleChange: (e: React.ChangeEvent) => void;
  submitForm: () => Promise<void>;
}

export const Select: React.FC<Props> = ({
  options,
  name,
  priceFormat,
  handleChange,
  submitForm,
}) => {
  return (
    <select
      name={name}
      defaultValue="default"
      onChange={(e) => {
        handleChange(e);
        submitForm();
      }}
    >
      <option value="default" disabled hidden>
        {name}
      </option>
      {options.map((option, idx) => (
        <option key={idx} value={option}>
          {priceFormat ? formatMoney(option) : option}
        </option>
      ))}
    </select>
  );
};
