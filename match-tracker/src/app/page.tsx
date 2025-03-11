// import { Card } from "shared/ui/card";
import { CardsList } from "widgets/CardsList";
import { Wrapper } from "shared/ui/Wrapper";

export default function Home() {
  return (
    <div>
      <main>
        <Wrapper>
          <CardsList />
        </Wrapper>
      </main>
    </div>
  );
}
