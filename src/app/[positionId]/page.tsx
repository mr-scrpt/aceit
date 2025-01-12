import { POSITION_LIST } from "@/entity/position/model/position.model";
import { PositionModule } from "@/widget/position";
import { FC } from "react";

type PageParams = {
  positionId: string;
};

interface PageProps {
  params: Promise<PageParams>;
}
export async function generateStaticParams() {
  return POSITION_LIST.map((p) => ({
    positionId: p.id.toString(),
  }));
}

const PositionPage = async ({ params }: PageProps) => {
  const { positionId } = await params;
  return <PositionModule positionId={positionId} />;
};

export default PositionPage;
