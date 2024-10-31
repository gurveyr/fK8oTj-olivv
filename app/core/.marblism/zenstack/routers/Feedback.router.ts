/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@zenstackhq/runtime/models';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.FeedbackInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).feedback.createMany(input as any))),

        create: procedure.input($Schema.FeedbackInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).feedback.create(input as any))),

        deleteMany: procedure.input($Schema.FeedbackInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).feedback.deleteMany(input as any))),

        delete: procedure.input($Schema.FeedbackInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).feedback.delete(input as any))),

        findFirst: procedure.input($Schema.FeedbackInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).feedback.findFirst(input as any))),

        findMany: procedure.input($Schema.FeedbackInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).feedback.findMany(input as any))),

        findUnique: procedure.input($Schema.FeedbackInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).feedback.findUnique(input as any))),

        updateMany: procedure.input($Schema.FeedbackInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).feedback.updateMany(input as any))),

        update: procedure.input($Schema.FeedbackInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).feedback.update(input as any))),

        count: procedure.input($Schema.FeedbackInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).feedback.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.FeedbackCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.FeedbackCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.FeedbackCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.FeedbackCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.FeedbackCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.FeedbackCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.FeedbackGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.FeedbackGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.FeedbackCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.FeedbackCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.FeedbackGetPayload<T>, Context>) => Promise<Prisma.FeedbackGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.FeedbackDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.FeedbackDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.FeedbackDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.FeedbackDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.FeedbackDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.FeedbackDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.FeedbackGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.FeedbackGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.FeedbackDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.FeedbackDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.FeedbackGetPayload<T>, Context>) => Promise<Prisma.FeedbackGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.FeedbackFindFirstArgs, TData = Prisma.FeedbackGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.FeedbackFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.FeedbackGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.FeedbackFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.FeedbackFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.FeedbackGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.FeedbackGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.FeedbackFindManyArgs, TData = Array<Prisma.FeedbackGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.FeedbackFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.FeedbackGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.FeedbackFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.FeedbackFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.FeedbackGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.FeedbackGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.FeedbackFindUniqueArgs, TData = Prisma.FeedbackGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.FeedbackFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.FeedbackGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.FeedbackFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.FeedbackFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.FeedbackGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.FeedbackGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.FeedbackUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.FeedbackUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.FeedbackUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.FeedbackUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.FeedbackUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.FeedbackUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.FeedbackGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.FeedbackGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.FeedbackUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.FeedbackUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.FeedbackGetPayload<T>, Context>) => Promise<Prisma.FeedbackGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.FeedbackCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.FeedbackCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.FeedbackCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.FeedbackCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.FeedbackCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.FeedbackCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.FeedbackCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.FeedbackCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
