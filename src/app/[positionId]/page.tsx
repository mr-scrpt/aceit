import { POSITION_LIST } from "@/entity/position/model/position.model";
import { PositionModule } from "@/widget/position";
import { FC } from "react";

interface PageProps {
  params: { positionId: string };
}

export async function generateStaticParams() {
  return POSITION_LIST.map((p) => ({
    positionId: p.id.toString(),
  }));
}

const PositionPage: FC<PageProps> = async ({ params }: PageProps) => {
  const { positionId } = await params;
  return <PositionModule positionId={positionId} />;
};

export default PositionPage;
