import { colors } from "../themes/colors";

export default function Background({ children }: any) {
  return (
    <div
      style={{
        backgroundColor: colors?.base_bg,
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      {children}
    </div>
  );
}
