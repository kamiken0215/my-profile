import { Profile } from "../../../models/profile";

export default function Career({
  contents,
}: {
  contents: Profile[];
}): JSX.Element {
  return (
    <>
      {contents.map((content, index) => (
        <div key={index}>
          <p>{content.title}</p>
          <div dangerouslySetInnerHTML={{ __html: content.body }} />
        </div>
      ))}
    </>
  );
}
