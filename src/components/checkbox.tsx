import { IconCheckbox, IconSquare } from "@tabler/icons-react";
import React from "react";

type Props = {
  checked: boolean;
  toggleChecked: () => void;
  label: string;
  classes?: {
    root?: string;
    checked?: string;
    unchecked?: string;
  };
  disabled?: boolean;
};

const Checkbox = ({
  checked,
  toggleChecked,
  label,
  classes,
  disabled,
}: Props) => {
  return (
    <div className={classes?.root ? classes.root : "flex"}>
      {label}
      {checked ? (
        <IconCheckbox
          onClick={() => (disabled ? null : toggleChecked())}
          className={
            classes?.checked ? classes.checked : "cursor-pointer text-green-400"
          }
        />
      ) : (
        <IconSquare
          onClick={() => (disabled ? null : toggleChecked())}
          className={
            classes?.unchecked
              ? classes.unchecked
              : "cursor-pointer text-red-400"
          }
        />
      )}
    </div>
  );
};

export default Checkbox;
