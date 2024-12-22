import { useEffect, useRef } from "react";
import Up from "./icons/Up";
import Down from "./icons/Down";

const Dollar = ({ amount }) => {
  const oldAmount = useRef(amount);
  const ref = useRef(null);

  useEffect(() => {
    if (amount !== oldAmount.current) {
      if (amount > oldAmount.current) {
        ref.current.classList.remove("down");
        ref.current.classList.add("up");
      } else if (amount < oldAmount.current) {
        ref.current.classList.remove("up");
        ref.current.classList.add("down");
      }
    }

    const timeout = setTimeout(() => {
      ref.current.classList.remove("up");
      ref.current.classList.remove("down");
    }, 2000);

    oldAmount.current = amount;

    return () => {
      clearTimeout(timeout);
    };
  }, [amount]);

  return (
    <div ref={ref}>
      <h1>Dollar</h1>
      <h2>{amount.toFixed(2)} TL</h2>

      {oldAmount.current !== amount ? (
        <h3>
          <div className="percentage">
            %
            {(((amount - oldAmount.current) / oldAmount.current) * 100).toFixed(
              2
            )}
            <Up />
            <Down />
          </div>
        </h3>
      ) : null}
    </div>
  );
};

export default Dollar;
