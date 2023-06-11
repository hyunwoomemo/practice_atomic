import { useContext } from "react";
import { HomeContext } from "../../components/Home";

const useHomeContext = () => {
  const context = useContext(HomeContext);

  if (!context) throw new Error("Home 컴포넌트 내부에서만 랜더링 될 수 있습니다!!");

  return context;
};

export default useHomeContext;
