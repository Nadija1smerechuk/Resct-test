// const alertStyles = {
//   margin: 8,
//   padding: "12px 16px",
//   borderRadius: 4,
//   backgroundColor: "gray",
//   color: "white",
// };

// export const Alert = ({ children }) => {
//   return <p style={alertStyles}>{children}</p>;
// };


// import css from "./Alert.module.css";

// console.log(css);
// const Alert = ({ children }) => {
//   // Звертаємось до властивості об'єкта на ім'я класу з файлу CSS-модуля
//   return <p className={css.alert}>{children}</p>;
// };

import clsx from "clsx";
import css from "./Alert.module.css";

const Alert = ({ variant, outlined, elevated, children }) => {
  return (
    <p
       className={clsx(
        css[variant],
        outlined && css.isOutlined,
        elevated && css.isElevated
      )}
    >
      {children}
    </p>
  );
};