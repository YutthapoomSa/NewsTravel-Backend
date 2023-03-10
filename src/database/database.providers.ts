import { Sequelize } from 'sequelize-typescript';
import { ConfigService } from './../shared/config/config.service';
import { NewsTravelDB } from './entity/news-travel.entity';
import { UserPasswordDB } from './entity/user-password.entity';
import { UserSocketDB } from './entity/user-socket.entity';
import { UserTokenDB } from './entity/user-token.entity';
import { UserDB } from './entity/user.entity';

export enum DataBase {
    UserDB = 'UserDB',
    UserTokenDB = 'UserTokenDB',
    UserSocketDB = 'UserSocketDB',
    UserPasswordDB = 'UserPasswordDB',
    NewsTravelDB = 'NewsTravelDB'
}

export const dbProviders = [
    {
        provide: DataBase.UserDB,
        useValue: UserDB,
    },
    {
        provide: DataBase.UserTokenDB,
        useValue: UserTokenDB,
    },
    {
        provide: DataBase.UserPasswordDB,
        useValue: UserPasswordDB,
    },
    {
        provide: DataBase.UserSocketDB,
        useValue: UserSocketDB,
    },
    {
        provide: DataBase.NewsTravelDB,
        useValue: NewsTravelDB,
    },
];

export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async (configService: ConfigService) => {
            const sequelize = new Sequelize(configService.sequelizeOrmConfig);
            // tslint:disable-next-line:max-line-length
            sequelize.addModels([UserDB, UserTokenDB, UserSocketDB, UserPasswordDB, NewsTravelDB]);
            // await sequelize.sync({ alter: true });
            // await sequelize.sync({ force: true });
            return sequelize;
        },
        inject: [ConfigService],
    },
];
