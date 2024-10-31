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

        createMany: procedure.input($Schema.SubcategoryInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).subcategory.createMany(input as any))),

        create: procedure.input($Schema.SubcategoryInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).subcategory.create(input as any))),

        deleteMany: procedure.input($Schema.SubcategoryInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).subcategory.deleteMany(input as any))),

        delete: procedure.input($Schema.SubcategoryInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).subcategory.delete(input as any))),

        findFirst: procedure.input($Schema.SubcategoryInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).subcategory.findFirst(input as any))),

        findMany: procedure.input($Schema.SubcategoryInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).subcategory.findMany(input as any))),

        findUnique: procedure.input($Schema.SubcategoryInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).subcategory.findUnique(input as any))),

        updateMany: procedure.input($Schema.SubcategoryInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).subcategory.updateMany(input as any))),

        update: procedure.input($Schema.SubcategoryInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).subcategory.update(input as any))),

        count: procedure.input($Schema.SubcategoryInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).subcategory.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.SubcategoryCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SubcategoryCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SubcategoryCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SubcategoryCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.SubcategoryCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SubcategoryCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.SubcategoryGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.SubcategoryGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SubcategoryCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SubcategoryCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.SubcategoryGetPayload<T>, Context>) => Promise<Prisma.SubcategoryGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.SubcategoryDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SubcategoryDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SubcategoryDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SubcategoryDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.SubcategoryDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SubcategoryDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.SubcategoryGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.SubcategoryGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SubcategoryDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SubcategoryDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.SubcategoryGetPayload<T>, Context>) => Promise<Prisma.SubcategoryGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.SubcategoryFindFirstArgs, TData = Prisma.SubcategoryGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.SubcategoryFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.SubcategoryGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.SubcategoryFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.SubcategoryFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.SubcategoryGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.SubcategoryGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.SubcategoryFindManyArgs, TData = Array<Prisma.SubcategoryGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.SubcategoryFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.SubcategoryGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.SubcategoryFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.SubcategoryFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.SubcategoryGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.SubcategoryGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.SubcategoryFindUniqueArgs, TData = Prisma.SubcategoryGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.SubcategoryFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.SubcategoryGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.SubcategoryFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SubcategoryFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.SubcategoryGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.SubcategoryGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.SubcategoryUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SubcategoryUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SubcategoryUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SubcategoryUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.SubcategoryUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SubcategoryUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.SubcategoryGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.SubcategoryGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SubcategoryUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SubcategoryUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.SubcategoryGetPayload<T>, Context>) => Promise<Prisma.SubcategoryGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.SubcategoryCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.SubcategoryCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.SubcategoryCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.SubcategoryCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.SubcategoryCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.SubcategoryCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.SubcategoryCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.SubcategoryCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
