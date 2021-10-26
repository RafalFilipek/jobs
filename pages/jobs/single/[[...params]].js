import { useRouter } from "next/router";

export default function Page() {
  const r = useRouter();
  return (
    <div>
      <h2>single</h2>
      <pre>{JSON.stringify(r, null, 2)}</pre>
    </div>
  );
}
