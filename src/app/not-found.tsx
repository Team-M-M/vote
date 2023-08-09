import lottieJson from "../../public/images/404notfound.json";
import { ErrorWrapper } from "@components/Common/Error/error-wrapper";

export default function NotFound() {
  return (
    <ErrorWrapper code={404} message="페이지를 찾을 수 없어요" jsonObj={lottieJson} />
  );
}