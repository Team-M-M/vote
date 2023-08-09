import { ErrorWrapper } from "./error-wrapper";
import lottieJson from "../../../../public/images/error.json";
import lottie404Json from "../../../../public/images/404notfound.json";

export const ErrorPage = ({ code }: { code: number }) => {

  switch (code) {
    case 400:
      return <ErrorWrapper code={400} message="잠시 후 다시 확인해주세요" jsonObj={lottieJson} />
    case 404:
      return <ErrorWrapper code={404} message="페이지를 찾을 수 없어요" jsonObj={lottie404Json} />
    case 500:
      return <ErrorWrapper code={500} message="잠시 후 다시 확인해주세요" jsonObj={lottie404Json} />
    default:
      return <ErrorWrapper code={500} message="잠시 후 다시 확인해주세요" jsonObj={lottie404Json} />
  }
}