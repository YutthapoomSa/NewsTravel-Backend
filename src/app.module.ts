import { ApiNewsTravelService } from './api/news-travel/service/api-newstravel.service';
import { CacheModule, Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { ThrottlerModule } from '@nestjs/throttler';
import { UsersModule } from './api/users/users.module';
import { ConvertImageService } from './helper/services/convert-image.service';
import { EncryptionService } from './helper/services/encryption.service';
import { LogService } from './helper/services/log.service';
import { PaginationService } from './helper/services/pagination/pagination.service';
import { SharedModule } from './shared/shared.module';
import { NewsTravelModule } from './api/news-travel/news-travel.module';
@Module({
    imports: [
        CacheModule.register(),
        UsersModule,
        SharedModule,
        ScheduleModule.forRoot(),
        ThrottlerModule.forRoot({
            ttl: 60,
            limit: 60,
        }),
        NewsTravelModule,
    ],
    providers: [
        ApiNewsTravelService, LogService, ConvertImageService, EncryptionService, PaginationService],
})
export class AppModule { }
