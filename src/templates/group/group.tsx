import React from "react"
import { Card, CardHolder } from "../../components/Card"
import { Nav } from "../../components/Nav"
import { Head } from "../../components/Head"
import { navigate } from "gatsby"
import { Content } from "../../components/Content"
import { RelicPreview } from "../../components/RelicPreview"
import { TextDescription } from "../../components/TextDescription"

export default ({ pageContext, location }: { pageContext: any, location: any }) => {
    const { group } = pageContext;
    return (<>
        <div className="flex justify-start flex-col">
            <Head />
            <Nav />
            <Content className="container">
                <RelicPreview localFile={group.Image.file}>
                    <h2>{group.Title}</h2>
                </RelicPreview>
                <TextDescription markdown={group.Description} />
            <CardHolder>
                {group.relics.map((relic: any) => (
                    <Card onClick={()=> navigate(`/${relic.qr_code.Slug}?Group=${group.qr_code.Slug}`) } key={relic.qr_code.Slug} title={relic.Title} localFile={relic.Image.file} className="cursor-pointer"/>
                    )
                )}
            </CardHolder>
            </Content>
        </div>
    </>
    )
}
