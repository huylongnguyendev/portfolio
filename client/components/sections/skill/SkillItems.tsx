

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SkillItemType } from "@/lib/data/skill-data"
import Image from "next/image"


const SkillItem = ({ item }: { item: SkillItemType }) => {

  return (
    <>
      <Card className="text-center">
        <CardContent>
          <Image src={item.image} alt={item.value} />
        </CardContent>
        <CardHeader>
          <CardTitle>{item.name}</CardTitle>
        </CardHeader>
      </Card>
    </>
  )
}

export default SkillItem