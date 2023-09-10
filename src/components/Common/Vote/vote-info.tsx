export function VoteInfo({ title, desc }: { title: string; desc: Array<{ sequence: number; description: string }> }) {
  return (
    <div className="py-3 w-full px-4 text-white bg-main rounded-lg shadow-md">
      <p className="text-3xl font-bold py-4">{title} 투표</p>
      {/* ! 모달로 띄울생각 */}
      {desc.map((item, i) => {
        return (
          <p className="text-sm" key={i * 12}>
            💡 {item.description}
          </p>
        );
      })}
      <p className="text-sm">💡 이미 완료한 투표는 수정할 수 없으므로 신중하게 해주세요</p>
      <section className="w-full flex items-center justify-between pt-2">
        <p className="flex-1">후보자</p>
        <p className="mx-2">찬성</p>
        <p className="mx-2">반대</p>
      </section>
    </div>
  );
}
