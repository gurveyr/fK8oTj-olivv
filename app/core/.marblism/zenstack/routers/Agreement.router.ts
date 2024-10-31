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

        createMany: procedure.input($Schema.AgreementInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).agreement.createMany(input as any))),

        create: procedure.input($Schema.AgreementInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).agreement.create(input as any))),

        deleteMany: procedure.input($Schema.AgreementInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).agreement.deleteMany(input as any))),

        delete: procedure.input($Schema.AgreementInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).agreement.delete(input as any))),

        findFirst: procedure.input($Schema.AgreementInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).agreement.findFirst(input as any))),

        findMany: procedure.input($Schema.AgreementInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).agreement.findMany(input as any))),

        findUnique: procedure.input($Schema.AgreementInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).agreement.findUnique(input as any))),

        updateMany: procedure.input($Schema.AgreementInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).agreement.updateMany(input as any))),

        update: procedure.input($Schema.AgreementInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).agreement.update(input as any))),

        count: procedure.input($Schema.AgreementInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).agreement.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.AgreementCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AgreementCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AgreementCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AgreementCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.AgreementCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AgreementCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.AgreementGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.AgreementGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AgreementCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AgreementCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.AgreementGetPayload<T>, Context>) => Promise<Prisma.AgreementGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.AgreementDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AgreementDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AgreementDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AgreementDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.AgreementDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AgreementDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.AgreementGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.AgreementGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AgreementDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AgreementDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.AgreementGetPayload<T>, Context>) => Promise<Prisma.AgreementGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.AgreementFindFirstArgs, TData = Prisma.AgreementGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.AgreementFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.AgreementGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.AgreementFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.AgreementFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.AgreementGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.AgreementGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.AgreementFindManyArgs, TData = Array<Prisma.AgreementGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.AgreementFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.AgreementGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.AgreementFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.AgreementFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.AgreementGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.AgreementGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.AgreementFindUniqueArgs, TData = Prisma.AgreementGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.AgreementFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.AgreementGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.AgreementFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.AgreementFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.AgreementGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.AgreementGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.AgreementUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AgreementUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AgreementUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AgreementUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.AgreementUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.AgreementUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.AgreementGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.AgreementGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.AgreementUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.AgreementUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.AgreementGetPayload<T>, Context>) => Promise<Prisma.AgreementGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.AgreementCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.AgreementCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.AgreementCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.AgreementCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.AgreementCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.AgreementCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.AgreementCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.AgreementCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
