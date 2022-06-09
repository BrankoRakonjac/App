import { Body, Controller, Post } from "@nestjs/common";
import { Crud } from "@nestjsx/crud";
import { Article } from "entities/article.entity";
import { AddArticleDto } from "src/dtos/administrator/article/add.article.dto";
import { ArticleService } from "src/services/administrator/article/article.service";

@Controller('api/article')
@Crud({
    model: {
        type: Article
    },
    params:{
        id:{
            field: 'articleId',
            type: 'number',
            primary: true
        }
    },
    query:{
        join:{

            category:{
                eager: true
            },
            photos:{
                eager: true
            },
            articlePrices:{
                eager: true
            },
            articleFeatures:{
                eager: true
            },
            features:{
                eager: true 
            }
            
            
        }
    }
})
export class ArticleControler{
    constructor(public service: ArticleService){}

        @Post('createFull') 
        createFullArticle(@Body() data: AddArticleDto){
            return this.service.createFullArticle(data);
        }

    
}