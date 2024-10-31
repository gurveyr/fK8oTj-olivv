/* eslint-disable */
import type { unsetMarker, AnyRouter, AnyRootConfig, CreateRouterInner, Procedure, ProcedureBuilder, ProcedureParams, ProcedureRouterRecord, ProcedureType } from "@trpc/server";
import type { PrismaClient } from "@zenstackhq/runtime/models";
import createUserRouter from "./User.router";
import createCategoryRouter from "./Category.router";
import createSubcategoryRouter from "./Subcategory.router";
import createRoleDataRouter from "./RoleData.router";
import createDiscussionRouter from "./Discussion.router";
import createMessageRouter from "./Message.router";
import createParticipantRouter from "./Participant.router";
import createFeedbackRouter from "./Feedback.router";
import createAgreementRouter from "./Agreement.router";
import createPwaSubscriptionRouter from "./PwaSubscription.router";
import { ClientType as UserClientType } from "./User.router";
import { ClientType as CategoryClientType } from "./Category.router";
import { ClientType as SubcategoryClientType } from "./Subcategory.router";
import { ClientType as RoleDataClientType } from "./RoleData.router";
import { ClientType as DiscussionClientType } from "./Discussion.router";
import { ClientType as MessageClientType } from "./Message.router";
import { ClientType as ParticipantClientType } from "./Participant.router";
import { ClientType as FeedbackClientType } from "./Feedback.router";
import { ClientType as AgreementClientType } from "./Agreement.router";
import { ClientType as PwaSubscriptionClientType } from "./PwaSubscription.router";

export type BaseConfig = AnyRootConfig;

export type RouterFactory<Config extends BaseConfig> = <
    ProcRouterRecord extends ProcedureRouterRecord
>(
    procedures: ProcRouterRecord
) => CreateRouterInner<Config, ProcRouterRecord>;

export type UnsetMarker = typeof unsetMarker;

export type ProcBuilder<Config extends BaseConfig> = ProcedureBuilder<
    ProcedureParams<Config, any, any, any, UnsetMarker, UnsetMarker, any>
>;

export function db(ctx: any) {
    if (!ctx.prisma) {
        throw new Error('Missing "prisma" field in trpc context');
    }
    return ctx.prisma as PrismaClient;
}

export function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({
        user: createUserRouter(router, procedure),
        category: createCategoryRouter(router, procedure),
        subcategory: createSubcategoryRouter(router, procedure),
        roleData: createRoleDataRouter(router, procedure),
        discussion: createDiscussionRouter(router, procedure),
        message: createMessageRouter(router, procedure),
        participant: createParticipantRouter(router, procedure),
        feedback: createFeedbackRouter(router, procedure),
        agreement: createAgreementRouter(router, procedure),
        pwaSubscription: createPwaSubscriptionRouter(router, procedure),
    }
    );
}

export interface ClientType<AppRouter extends AnyRouter> {
    user: UserClientType<AppRouter>;
    category: CategoryClientType<AppRouter>;
    subcategory: SubcategoryClientType<AppRouter>;
    roleData: RoleDataClientType<AppRouter>;
    discussion: DiscussionClientType<AppRouter>;
    message: MessageClientType<AppRouter>;
    participant: ParticipantClientType<AppRouter>;
    feedback: FeedbackClientType<AppRouter>;
    agreement: AgreementClientType<AppRouter>;
    pwaSubscription: PwaSubscriptionClientType<AppRouter>;
}
