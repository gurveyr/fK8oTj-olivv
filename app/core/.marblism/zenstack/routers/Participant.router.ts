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

        createMany: procedure.input($Schema.ParticipantInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).participant.createMany(input as any))),

        create: procedure.input($Schema.ParticipantInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).participant.create(input as any))),

        deleteMany: procedure.input($Schema.ParticipantInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).participant.deleteMany(input as any))),

        delete: procedure.input($Schema.ParticipantInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).participant.delete(input as any))),

        findFirst: procedure.input($Schema.ParticipantInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).participant.findFirst(input as any))),

        findMany: procedure.input($Schema.ParticipantInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).participant.findMany(input as any))),

        findUnique: procedure.input($Schema.ParticipantInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).participant.findUnique(input as any))),

        updateMany: procedure.input($Schema.ParticipantInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).participant.updateMany(input as any))),

        update: procedure.input($Schema.ParticipantInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).participant.update(input as any))),

        count: procedure.input($Schema.ParticipantInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).participant.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.ParticipantCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ParticipantCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ParticipantCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ParticipantCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.ParticipantCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ParticipantCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ParticipantGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ParticipantGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ParticipantCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ParticipantCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ParticipantGetPayload<T>, Context>) => Promise<Prisma.ParticipantGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.ParticipantDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ParticipantDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ParticipantDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ParticipantDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.ParticipantDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ParticipantDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ParticipantGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ParticipantGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ParticipantDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ParticipantDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ParticipantGetPayload<T>, Context>) => Promise<Prisma.ParticipantGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.ParticipantFindFirstArgs, TData = Prisma.ParticipantGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.ParticipantFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ParticipantGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ParticipantFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.ParticipantFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ParticipantGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ParticipantGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.ParticipantFindManyArgs, TData = Array<Prisma.ParticipantGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.ParticipantFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.ParticipantGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ParticipantFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.ParticipantFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.ParticipantGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.ParticipantGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.ParticipantFindUniqueArgs, TData = Prisma.ParticipantGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ParticipantFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ParticipantGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ParticipantFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ParticipantFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ParticipantGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ParticipantGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.ParticipantUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ParticipantUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ParticipantUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ParticipantUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.ParticipantUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ParticipantUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ParticipantGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ParticipantGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ParticipantUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ParticipantUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ParticipantGetPayload<T>, Context>) => Promise<Prisma.ParticipantGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.ParticipantCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.ParticipantCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.ParticipantCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.ParticipantCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.ParticipantCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.ParticipantCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.ParticipantCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.ParticipantCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
