
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model tLike
 * 
 */
export type tLike = $Result.DefaultSelection<Prisma.$tLikePayload>
/**
 * Model mPost
 * 
 */
export type mPost = $Result.DefaultSelection<Prisma.$mPostPayload>
/**
 * Model mUser
 * 
 */
export type mUser = $Result.DefaultSelection<Prisma.$mUserPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more TLikes
 * const tLikes = await prisma.tLike.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more TLikes
   * const tLikes = await prisma.tLike.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.tLike`: Exposes CRUD operations for the **tLike** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TLikes
    * const tLikes = await prisma.tLike.findMany()
    * ```
    */
  get tLike(): Prisma.tLikeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mPost`: Exposes CRUD operations for the **mPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MPosts
    * const mPosts = await prisma.mPost.findMany()
    * ```
    */
  get mPost(): Prisma.mPostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mUser`: Exposes CRUD operations for the **mUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MUsers
    * const mUsers = await prisma.mUser.findMany()
    * ```
    */
  get mUser(): Prisma.mUserDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    tLike: 'tLike',
    mPost: 'mPost',
    mUser: 'mUser'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "tLike" | "mPost" | "mUser"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      tLike: {
        payload: Prisma.$tLikePayload<ExtArgs>
        fields: Prisma.tLikeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tLikeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tLikePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tLikeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tLikePayload>
          }
          findFirst: {
            args: Prisma.tLikeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tLikePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tLikeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tLikePayload>
          }
          findMany: {
            args: Prisma.tLikeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tLikePayload>[]
          }
          create: {
            args: Prisma.tLikeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tLikePayload>
          }
          createMany: {
            args: Prisma.tLikeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tLikeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tLikePayload>[]
          }
          delete: {
            args: Prisma.tLikeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tLikePayload>
          }
          update: {
            args: Prisma.tLikeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tLikePayload>
          }
          deleteMany: {
            args: Prisma.tLikeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tLikeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tLikeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tLikePayload>[]
          }
          upsert: {
            args: Prisma.tLikeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tLikePayload>
          }
          aggregate: {
            args: Prisma.TLikeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTLike>
          }
          groupBy: {
            args: Prisma.tLikeGroupByArgs<ExtArgs>
            result: $Utils.Optional<TLikeGroupByOutputType>[]
          }
          count: {
            args: Prisma.tLikeCountArgs<ExtArgs>
            result: $Utils.Optional<TLikeCountAggregateOutputType> | number
          }
        }
      }
      mPost: {
        payload: Prisma.$mPostPayload<ExtArgs>
        fields: Prisma.mPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.mPostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.mPostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mPostPayload>
          }
          findFirst: {
            args: Prisma.mPostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.mPostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mPostPayload>
          }
          findMany: {
            args: Prisma.mPostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mPostPayload>[]
          }
          create: {
            args: Prisma.mPostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mPostPayload>
          }
          createMany: {
            args: Prisma.mPostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.mPostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mPostPayload>[]
          }
          delete: {
            args: Prisma.mPostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mPostPayload>
          }
          update: {
            args: Prisma.mPostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mPostPayload>
          }
          deleteMany: {
            args: Prisma.mPostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.mPostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.mPostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mPostPayload>[]
          }
          upsert: {
            args: Prisma.mPostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mPostPayload>
          }
          aggregate: {
            args: Prisma.MPostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMPost>
          }
          groupBy: {
            args: Prisma.mPostGroupByArgs<ExtArgs>
            result: $Utils.Optional<MPostGroupByOutputType>[]
          }
          count: {
            args: Prisma.mPostCountArgs<ExtArgs>
            result: $Utils.Optional<MPostCountAggregateOutputType> | number
          }
        }
      }
      mUser: {
        payload: Prisma.$mUserPayload<ExtArgs>
        fields: Prisma.mUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.mUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.mUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mUserPayload>
          }
          findFirst: {
            args: Prisma.mUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.mUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mUserPayload>
          }
          findMany: {
            args: Prisma.mUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mUserPayload>[]
          }
          create: {
            args: Prisma.mUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mUserPayload>
          }
          createMany: {
            args: Prisma.mUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.mUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mUserPayload>[]
          }
          delete: {
            args: Prisma.mUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mUserPayload>
          }
          update: {
            args: Prisma.mUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mUserPayload>
          }
          deleteMany: {
            args: Prisma.mUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.mUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.mUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mUserPayload>[]
          }
          upsert: {
            args: Prisma.mUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$mUserPayload>
          }
          aggregate: {
            args: Prisma.MUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMUser>
          }
          groupBy: {
            args: Prisma.mUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<MUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.mUserCountArgs<ExtArgs>
            result: $Utils.Optional<MUserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    tLike?: tLikeOmit
    mPost?: mPostOmit
    mUser?: mUserOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type MPostCountOutputType
   */

  export type MPostCountOutputType = {
    likes: number
  }

  export type MPostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    likes?: boolean | MPostCountOutputTypeCountLikesArgs
  }

  // Custom InputTypes
  /**
   * MPostCountOutputType without action
   */
  export type MPostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MPostCountOutputType
     */
    select?: MPostCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MPostCountOutputType without action
   */
  export type MPostCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tLikeWhereInput
  }


  /**
   * Count Type MUserCountOutputType
   */

  export type MUserCountOutputType = {
    user_post: number
    likes: number
  }

  export type MUserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_post?: boolean | MUserCountOutputTypeCountUser_postArgs
    likes?: boolean | MUserCountOutputTypeCountLikesArgs
  }

  // Custom InputTypes
  /**
   * MUserCountOutputType without action
   */
  export type MUserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MUserCountOutputType
     */
    select?: MUserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MUserCountOutputType without action
   */
  export type MUserCountOutputTypeCountUser_postArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mPostWhereInput
  }

  /**
   * MUserCountOutputType without action
   */
  export type MUserCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tLikeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model tLike
   */

  export type AggregateTLike = {
    _count: TLikeCountAggregateOutputType | null
    _avg: TLikeAvgAggregateOutputType | null
    _sum: TLikeSumAggregateOutputType | null
    _min: TLikeMinAggregateOutputType | null
    _max: TLikeMaxAggregateOutputType | null
  }

  export type TLikeAvgAggregateOutputType = {
    id: number | null
    post_id: number | null
  }

  export type TLikeSumAggregateOutputType = {
    id: number | null
    post_id: number | null
  }

  export type TLikeMinAggregateOutputType = {
    id: number | null
    user_id: string | null
    post_id: number | null
  }

  export type TLikeMaxAggregateOutputType = {
    id: number | null
    user_id: string | null
    post_id: number | null
  }

  export type TLikeCountAggregateOutputType = {
    id: number
    user_id: number
    post_id: number
    _all: number
  }


  export type TLikeAvgAggregateInputType = {
    id?: true
    post_id?: true
  }

  export type TLikeSumAggregateInputType = {
    id?: true
    post_id?: true
  }

  export type TLikeMinAggregateInputType = {
    id?: true
    user_id?: true
    post_id?: true
  }

  export type TLikeMaxAggregateInputType = {
    id?: true
    user_id?: true
    post_id?: true
  }

  export type TLikeCountAggregateInputType = {
    id?: true
    user_id?: true
    post_id?: true
    _all?: true
  }

  export type TLikeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tLike to aggregate.
     */
    where?: tLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tLikes to fetch.
     */
    orderBy?: tLikeOrderByWithRelationInput | tLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tLikes
    **/
    _count?: true | TLikeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TLikeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TLikeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TLikeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TLikeMaxAggregateInputType
  }

  export type GetTLikeAggregateType<T extends TLikeAggregateArgs> = {
        [P in keyof T & keyof AggregateTLike]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTLike[P]>
      : GetScalarType<T[P], AggregateTLike[P]>
  }




  export type tLikeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tLikeWhereInput
    orderBy?: tLikeOrderByWithAggregationInput | tLikeOrderByWithAggregationInput[]
    by: TLikeScalarFieldEnum[] | TLikeScalarFieldEnum
    having?: tLikeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TLikeCountAggregateInputType | true
    _avg?: TLikeAvgAggregateInputType
    _sum?: TLikeSumAggregateInputType
    _min?: TLikeMinAggregateInputType
    _max?: TLikeMaxAggregateInputType
  }

  export type TLikeGroupByOutputType = {
    id: number
    user_id: string
    post_id: number
    _count: TLikeCountAggregateOutputType | null
    _avg: TLikeAvgAggregateOutputType | null
    _sum: TLikeSumAggregateOutputType | null
    _min: TLikeMinAggregateOutputType | null
    _max: TLikeMaxAggregateOutputType | null
  }

  type GetTLikeGroupByPayload<T extends tLikeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TLikeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TLikeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TLikeGroupByOutputType[P]>
            : GetScalarType<T[P], TLikeGroupByOutputType[P]>
        }
      >
    >


  export type tLikeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    post_id?: boolean
    user?: boolean | mUserDefaultArgs<ExtArgs>
    post?: boolean | mPostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tLike"]>

  export type tLikeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    post_id?: boolean
    user?: boolean | mUserDefaultArgs<ExtArgs>
    post?: boolean | mPostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tLike"]>

  export type tLikeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    post_id?: boolean
    user?: boolean | mUserDefaultArgs<ExtArgs>
    post?: boolean | mPostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tLike"]>

  export type tLikeSelectScalar = {
    id?: boolean
    user_id?: boolean
    post_id?: boolean
  }

  export type tLikeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "post_id", ExtArgs["result"]["tLike"]>
  export type tLikeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | mUserDefaultArgs<ExtArgs>
    post?: boolean | mPostDefaultArgs<ExtArgs>
  }
  export type tLikeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | mUserDefaultArgs<ExtArgs>
    post?: boolean | mPostDefaultArgs<ExtArgs>
  }
  export type tLikeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | mUserDefaultArgs<ExtArgs>
    post?: boolean | mPostDefaultArgs<ExtArgs>
  }

  export type $tLikePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tLike"
    objects: {
      user: Prisma.$mUserPayload<ExtArgs>
      post: Prisma.$mPostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: string
      post_id: number
    }, ExtArgs["result"]["tLike"]>
    composites: {}
  }

  type tLikeGetPayload<S extends boolean | null | undefined | tLikeDefaultArgs> = $Result.GetResult<Prisma.$tLikePayload, S>

  type tLikeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tLikeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TLikeCountAggregateInputType | true
    }

  export interface tLikeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tLike'], meta: { name: 'tLike' } }
    /**
     * Find zero or one TLike that matches the filter.
     * @param {tLikeFindUniqueArgs} args - Arguments to find a TLike
     * @example
     * // Get one TLike
     * const tLike = await prisma.tLike.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tLikeFindUniqueArgs>(args: SelectSubset<T, tLikeFindUniqueArgs<ExtArgs>>): Prisma__tLikeClient<$Result.GetResult<Prisma.$tLikePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TLike that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tLikeFindUniqueOrThrowArgs} args - Arguments to find a TLike
     * @example
     * // Get one TLike
     * const tLike = await prisma.tLike.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tLikeFindUniqueOrThrowArgs>(args: SelectSubset<T, tLikeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tLikeClient<$Result.GetResult<Prisma.$tLikePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TLike that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tLikeFindFirstArgs} args - Arguments to find a TLike
     * @example
     * // Get one TLike
     * const tLike = await prisma.tLike.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tLikeFindFirstArgs>(args?: SelectSubset<T, tLikeFindFirstArgs<ExtArgs>>): Prisma__tLikeClient<$Result.GetResult<Prisma.$tLikePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TLike that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tLikeFindFirstOrThrowArgs} args - Arguments to find a TLike
     * @example
     * // Get one TLike
     * const tLike = await prisma.tLike.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tLikeFindFirstOrThrowArgs>(args?: SelectSubset<T, tLikeFindFirstOrThrowArgs<ExtArgs>>): Prisma__tLikeClient<$Result.GetResult<Prisma.$tLikePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TLikes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tLikeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TLikes
     * const tLikes = await prisma.tLike.findMany()
     * 
     * // Get first 10 TLikes
     * const tLikes = await prisma.tLike.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tLikeWithIdOnly = await prisma.tLike.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tLikeFindManyArgs>(args?: SelectSubset<T, tLikeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TLike.
     * @param {tLikeCreateArgs} args - Arguments to create a TLike.
     * @example
     * // Create one TLike
     * const TLike = await prisma.tLike.create({
     *   data: {
     *     // ... data to create a TLike
     *   }
     * })
     * 
     */
    create<T extends tLikeCreateArgs>(args: SelectSubset<T, tLikeCreateArgs<ExtArgs>>): Prisma__tLikeClient<$Result.GetResult<Prisma.$tLikePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TLikes.
     * @param {tLikeCreateManyArgs} args - Arguments to create many TLikes.
     * @example
     * // Create many TLikes
     * const tLike = await prisma.tLike.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tLikeCreateManyArgs>(args?: SelectSubset<T, tLikeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TLikes and returns the data saved in the database.
     * @param {tLikeCreateManyAndReturnArgs} args - Arguments to create many TLikes.
     * @example
     * // Create many TLikes
     * const tLike = await prisma.tLike.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TLikes and only return the `id`
     * const tLikeWithIdOnly = await prisma.tLike.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tLikeCreateManyAndReturnArgs>(args?: SelectSubset<T, tLikeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tLikePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TLike.
     * @param {tLikeDeleteArgs} args - Arguments to delete one TLike.
     * @example
     * // Delete one TLike
     * const TLike = await prisma.tLike.delete({
     *   where: {
     *     // ... filter to delete one TLike
     *   }
     * })
     * 
     */
    delete<T extends tLikeDeleteArgs>(args: SelectSubset<T, tLikeDeleteArgs<ExtArgs>>): Prisma__tLikeClient<$Result.GetResult<Prisma.$tLikePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TLike.
     * @param {tLikeUpdateArgs} args - Arguments to update one TLike.
     * @example
     * // Update one TLike
     * const tLike = await prisma.tLike.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tLikeUpdateArgs>(args: SelectSubset<T, tLikeUpdateArgs<ExtArgs>>): Prisma__tLikeClient<$Result.GetResult<Prisma.$tLikePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TLikes.
     * @param {tLikeDeleteManyArgs} args - Arguments to filter TLikes to delete.
     * @example
     * // Delete a few TLikes
     * const { count } = await prisma.tLike.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tLikeDeleteManyArgs>(args?: SelectSubset<T, tLikeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tLikeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TLikes
     * const tLike = await prisma.tLike.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tLikeUpdateManyArgs>(args: SelectSubset<T, tLikeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TLikes and returns the data updated in the database.
     * @param {tLikeUpdateManyAndReturnArgs} args - Arguments to update many TLikes.
     * @example
     * // Update many TLikes
     * const tLike = await prisma.tLike.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TLikes and only return the `id`
     * const tLikeWithIdOnly = await prisma.tLike.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends tLikeUpdateManyAndReturnArgs>(args: SelectSubset<T, tLikeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tLikePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TLike.
     * @param {tLikeUpsertArgs} args - Arguments to update or create a TLike.
     * @example
     * // Update or create a TLike
     * const tLike = await prisma.tLike.upsert({
     *   create: {
     *     // ... data to create a TLike
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TLike we want to update
     *   }
     * })
     */
    upsert<T extends tLikeUpsertArgs>(args: SelectSubset<T, tLikeUpsertArgs<ExtArgs>>): Prisma__tLikeClient<$Result.GetResult<Prisma.$tLikePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tLikeCountArgs} args - Arguments to filter TLikes to count.
     * @example
     * // Count the number of TLikes
     * const count = await prisma.tLike.count({
     *   where: {
     *     // ... the filter for the TLikes we want to count
     *   }
     * })
    **/
    count<T extends tLikeCountArgs>(
      args?: Subset<T, tLikeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TLikeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TLike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TLikeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TLikeAggregateArgs>(args: Subset<T, TLikeAggregateArgs>): Prisma.PrismaPromise<GetTLikeAggregateType<T>>

    /**
     * Group by TLike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tLikeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tLikeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tLikeGroupByArgs['orderBy'] }
        : { orderBy?: tLikeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tLikeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTLikeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tLike model
   */
  readonly fields: tLikeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tLike.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tLikeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends mUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, mUserDefaultArgs<ExtArgs>>): Prisma__mUserClient<$Result.GetResult<Prisma.$mUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    post<T extends mPostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, mPostDefaultArgs<ExtArgs>>): Prisma__mPostClient<$Result.GetResult<Prisma.$mPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tLike model
   */
  interface tLikeFieldRefs {
    readonly id: FieldRef<"tLike", 'Int'>
    readonly user_id: FieldRef<"tLike", 'String'>
    readonly post_id: FieldRef<"tLike", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * tLike findUnique
   */
  export type tLikeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tLike
     */
    select?: tLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tLike
     */
    omit?: tLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tLikeInclude<ExtArgs> | null
    /**
     * Filter, which tLike to fetch.
     */
    where: tLikeWhereUniqueInput
  }

  /**
   * tLike findUniqueOrThrow
   */
  export type tLikeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tLike
     */
    select?: tLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tLike
     */
    omit?: tLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tLikeInclude<ExtArgs> | null
    /**
     * Filter, which tLike to fetch.
     */
    where: tLikeWhereUniqueInput
  }

  /**
   * tLike findFirst
   */
  export type tLikeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tLike
     */
    select?: tLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tLike
     */
    omit?: tLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tLikeInclude<ExtArgs> | null
    /**
     * Filter, which tLike to fetch.
     */
    where?: tLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tLikes to fetch.
     */
    orderBy?: tLikeOrderByWithRelationInput | tLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tLikes.
     */
    cursor?: tLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tLikes.
     */
    distinct?: TLikeScalarFieldEnum | TLikeScalarFieldEnum[]
  }

  /**
   * tLike findFirstOrThrow
   */
  export type tLikeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tLike
     */
    select?: tLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tLike
     */
    omit?: tLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tLikeInclude<ExtArgs> | null
    /**
     * Filter, which tLike to fetch.
     */
    where?: tLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tLikes to fetch.
     */
    orderBy?: tLikeOrderByWithRelationInput | tLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tLikes.
     */
    cursor?: tLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tLikes.
     */
    distinct?: TLikeScalarFieldEnum | TLikeScalarFieldEnum[]
  }

  /**
   * tLike findMany
   */
  export type tLikeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tLike
     */
    select?: tLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tLike
     */
    omit?: tLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tLikeInclude<ExtArgs> | null
    /**
     * Filter, which tLikes to fetch.
     */
    where?: tLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tLikes to fetch.
     */
    orderBy?: tLikeOrderByWithRelationInput | tLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tLikes.
     */
    cursor?: tLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tLikes.
     */
    skip?: number
    distinct?: TLikeScalarFieldEnum | TLikeScalarFieldEnum[]
  }

  /**
   * tLike create
   */
  export type tLikeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tLike
     */
    select?: tLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tLike
     */
    omit?: tLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tLikeInclude<ExtArgs> | null
    /**
     * The data needed to create a tLike.
     */
    data: XOR<tLikeCreateInput, tLikeUncheckedCreateInput>
  }

  /**
   * tLike createMany
   */
  export type tLikeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tLikes.
     */
    data: tLikeCreateManyInput | tLikeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tLike createManyAndReturn
   */
  export type tLikeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tLike
     */
    select?: tLikeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tLike
     */
    omit?: tLikeOmit<ExtArgs> | null
    /**
     * The data used to create many tLikes.
     */
    data: tLikeCreateManyInput | tLikeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tLikeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * tLike update
   */
  export type tLikeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tLike
     */
    select?: tLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tLike
     */
    omit?: tLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tLikeInclude<ExtArgs> | null
    /**
     * The data needed to update a tLike.
     */
    data: XOR<tLikeUpdateInput, tLikeUncheckedUpdateInput>
    /**
     * Choose, which tLike to update.
     */
    where: tLikeWhereUniqueInput
  }

  /**
   * tLike updateMany
   */
  export type tLikeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tLikes.
     */
    data: XOR<tLikeUpdateManyMutationInput, tLikeUncheckedUpdateManyInput>
    /**
     * Filter which tLikes to update
     */
    where?: tLikeWhereInput
    /**
     * Limit how many tLikes to update.
     */
    limit?: number
  }

  /**
   * tLike updateManyAndReturn
   */
  export type tLikeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tLike
     */
    select?: tLikeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tLike
     */
    omit?: tLikeOmit<ExtArgs> | null
    /**
     * The data used to update tLikes.
     */
    data: XOR<tLikeUpdateManyMutationInput, tLikeUncheckedUpdateManyInput>
    /**
     * Filter which tLikes to update
     */
    where?: tLikeWhereInput
    /**
     * Limit how many tLikes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tLikeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * tLike upsert
   */
  export type tLikeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tLike
     */
    select?: tLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tLike
     */
    omit?: tLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tLikeInclude<ExtArgs> | null
    /**
     * The filter to search for the tLike to update in case it exists.
     */
    where: tLikeWhereUniqueInput
    /**
     * In case the tLike found by the `where` argument doesn't exist, create a new tLike with this data.
     */
    create: XOR<tLikeCreateInput, tLikeUncheckedCreateInput>
    /**
     * In case the tLike was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tLikeUpdateInput, tLikeUncheckedUpdateInput>
  }

  /**
   * tLike delete
   */
  export type tLikeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tLike
     */
    select?: tLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tLike
     */
    omit?: tLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tLikeInclude<ExtArgs> | null
    /**
     * Filter which tLike to delete.
     */
    where: tLikeWhereUniqueInput
  }

  /**
   * tLike deleteMany
   */
  export type tLikeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tLikes to delete
     */
    where?: tLikeWhereInput
    /**
     * Limit how many tLikes to delete.
     */
    limit?: number
  }

  /**
   * tLike without action
   */
  export type tLikeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tLike
     */
    select?: tLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tLike
     */
    omit?: tLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tLikeInclude<ExtArgs> | null
  }


  /**
   * Model mPost
   */

  export type AggregateMPost = {
    _count: MPostCountAggregateOutputType | null
    _avg: MPostAvgAggregateOutputType | null
    _sum: MPostSumAggregateOutputType | null
    _min: MPostMinAggregateOutputType | null
    _max: MPostMaxAggregateOutputType | null
  }

  export type MPostAvgAggregateOutputType = {
    id: number | null
    like_num: number | null
  }

  export type MPostSumAggregateOutputType = {
    id: number | null
    like_num: number | null
  }

  export type MPostMinAggregateOutputType = {
    id: number | null
    url: string | null
    title: string | null
    post_ower: string | null
    like_num: number | null
    post_owner: string | null
  }

  export type MPostMaxAggregateOutputType = {
    id: number | null
    url: string | null
    title: string | null
    post_ower: string | null
    like_num: number | null
    post_owner: string | null
  }

  export type MPostCountAggregateOutputType = {
    id: number
    url: number
    title: number
    post_ower: number
    like_num: number
    post_owner: number
    _all: number
  }


  export type MPostAvgAggregateInputType = {
    id?: true
    like_num?: true
  }

  export type MPostSumAggregateInputType = {
    id?: true
    like_num?: true
  }

  export type MPostMinAggregateInputType = {
    id?: true
    url?: true
    title?: true
    post_ower?: true
    like_num?: true
    post_owner?: true
  }

  export type MPostMaxAggregateInputType = {
    id?: true
    url?: true
    title?: true
    post_ower?: true
    like_num?: true
    post_owner?: true
  }

  export type MPostCountAggregateInputType = {
    id?: true
    url?: true
    title?: true
    post_ower?: true
    like_num?: true
    post_owner?: true
    _all?: true
  }

  export type MPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mPost to aggregate.
     */
    where?: mPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mPosts to fetch.
     */
    orderBy?: mPostOrderByWithRelationInput | mPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mPosts
    **/
    _count?: true | MPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MPostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MPostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MPostMaxAggregateInputType
  }

  export type GetMPostAggregateType<T extends MPostAggregateArgs> = {
        [P in keyof T & keyof AggregateMPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMPost[P]>
      : GetScalarType<T[P], AggregateMPost[P]>
  }




  export type mPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mPostWhereInput
    orderBy?: mPostOrderByWithAggregationInput | mPostOrderByWithAggregationInput[]
    by: MPostScalarFieldEnum[] | MPostScalarFieldEnum
    having?: mPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MPostCountAggregateInputType | true
    _avg?: MPostAvgAggregateInputType
    _sum?: MPostSumAggregateInputType
    _min?: MPostMinAggregateInputType
    _max?: MPostMaxAggregateInputType
  }

  export type MPostGroupByOutputType = {
    id: number
    url: string
    title: string | null
    post_ower: string
    like_num: number
    post_owner: string
    _count: MPostCountAggregateOutputType | null
    _avg: MPostAvgAggregateOutputType | null
    _sum: MPostSumAggregateOutputType | null
    _min: MPostMinAggregateOutputType | null
    _max: MPostMaxAggregateOutputType | null
  }

  type GetMPostGroupByPayload<T extends mPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MPostGroupByOutputType[P]>
            : GetScalarType<T[P], MPostGroupByOutputType[P]>
        }
      >
    >


  export type mPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    title?: boolean
    post_ower?: boolean
    like_num?: boolean
    post_owner?: boolean
    mUser?: boolean | mUserDefaultArgs<ExtArgs>
    likes?: boolean | mPost$likesArgs<ExtArgs>
    _count?: boolean | MPostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mPost"]>

  export type mPostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    title?: boolean
    post_ower?: boolean
    like_num?: boolean
    post_owner?: boolean
    mUser?: boolean | mUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mPost"]>

  export type mPostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    title?: boolean
    post_ower?: boolean
    like_num?: boolean
    post_owner?: boolean
    mUser?: boolean | mUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mPost"]>

  export type mPostSelectScalar = {
    id?: boolean
    url?: boolean
    title?: boolean
    post_ower?: boolean
    like_num?: boolean
    post_owner?: boolean
  }

  export type mPostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "title" | "post_ower" | "like_num" | "post_owner", ExtArgs["result"]["mPost"]>
  export type mPostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mUser?: boolean | mUserDefaultArgs<ExtArgs>
    likes?: boolean | mPost$likesArgs<ExtArgs>
    _count?: boolean | MPostCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type mPostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mUser?: boolean | mUserDefaultArgs<ExtArgs>
  }
  export type mPostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mUser?: boolean | mUserDefaultArgs<ExtArgs>
  }

  export type $mPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "mPost"
    objects: {
      mUser: Prisma.$mUserPayload<ExtArgs>
      likes: Prisma.$tLikePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      url: string
      title: string | null
      post_ower: string
      like_num: number
      post_owner: string
    }, ExtArgs["result"]["mPost"]>
    composites: {}
  }

  type mPostGetPayload<S extends boolean | null | undefined | mPostDefaultArgs> = $Result.GetResult<Prisma.$mPostPayload, S>

  type mPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<mPostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MPostCountAggregateInputType | true
    }

  export interface mPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['mPost'], meta: { name: 'mPost' } }
    /**
     * Find zero or one MPost that matches the filter.
     * @param {mPostFindUniqueArgs} args - Arguments to find a MPost
     * @example
     * // Get one MPost
     * const mPost = await prisma.mPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends mPostFindUniqueArgs>(args: SelectSubset<T, mPostFindUniqueArgs<ExtArgs>>): Prisma__mPostClient<$Result.GetResult<Prisma.$mPostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MPost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {mPostFindUniqueOrThrowArgs} args - Arguments to find a MPost
     * @example
     * // Get one MPost
     * const mPost = await prisma.mPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends mPostFindUniqueOrThrowArgs>(args: SelectSubset<T, mPostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__mPostClient<$Result.GetResult<Prisma.$mPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mPostFindFirstArgs} args - Arguments to find a MPost
     * @example
     * // Get one MPost
     * const mPost = await prisma.mPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends mPostFindFirstArgs>(args?: SelectSubset<T, mPostFindFirstArgs<ExtArgs>>): Prisma__mPostClient<$Result.GetResult<Prisma.$mPostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mPostFindFirstOrThrowArgs} args - Arguments to find a MPost
     * @example
     * // Get one MPost
     * const mPost = await prisma.mPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends mPostFindFirstOrThrowArgs>(args?: SelectSubset<T, mPostFindFirstOrThrowArgs<ExtArgs>>): Prisma__mPostClient<$Result.GetResult<Prisma.$mPostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MPosts
     * const mPosts = await prisma.mPost.findMany()
     * 
     * // Get first 10 MPosts
     * const mPosts = await prisma.mPost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mPostWithIdOnly = await prisma.mPost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends mPostFindManyArgs>(args?: SelectSubset<T, mPostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MPost.
     * @param {mPostCreateArgs} args - Arguments to create a MPost.
     * @example
     * // Create one MPost
     * const MPost = await prisma.mPost.create({
     *   data: {
     *     // ... data to create a MPost
     *   }
     * })
     * 
     */
    create<T extends mPostCreateArgs>(args: SelectSubset<T, mPostCreateArgs<ExtArgs>>): Prisma__mPostClient<$Result.GetResult<Prisma.$mPostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MPosts.
     * @param {mPostCreateManyArgs} args - Arguments to create many MPosts.
     * @example
     * // Create many MPosts
     * const mPost = await prisma.mPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends mPostCreateManyArgs>(args?: SelectSubset<T, mPostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MPosts and returns the data saved in the database.
     * @param {mPostCreateManyAndReturnArgs} args - Arguments to create many MPosts.
     * @example
     * // Create many MPosts
     * const mPost = await prisma.mPost.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MPosts and only return the `id`
     * const mPostWithIdOnly = await prisma.mPost.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends mPostCreateManyAndReturnArgs>(args?: SelectSubset<T, mPostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mPostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MPost.
     * @param {mPostDeleteArgs} args - Arguments to delete one MPost.
     * @example
     * // Delete one MPost
     * const MPost = await prisma.mPost.delete({
     *   where: {
     *     // ... filter to delete one MPost
     *   }
     * })
     * 
     */
    delete<T extends mPostDeleteArgs>(args: SelectSubset<T, mPostDeleteArgs<ExtArgs>>): Prisma__mPostClient<$Result.GetResult<Prisma.$mPostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MPost.
     * @param {mPostUpdateArgs} args - Arguments to update one MPost.
     * @example
     * // Update one MPost
     * const mPost = await prisma.mPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends mPostUpdateArgs>(args: SelectSubset<T, mPostUpdateArgs<ExtArgs>>): Prisma__mPostClient<$Result.GetResult<Prisma.$mPostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MPosts.
     * @param {mPostDeleteManyArgs} args - Arguments to filter MPosts to delete.
     * @example
     * // Delete a few MPosts
     * const { count } = await prisma.mPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends mPostDeleteManyArgs>(args?: SelectSubset<T, mPostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MPosts
     * const mPost = await prisma.mPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends mPostUpdateManyArgs>(args: SelectSubset<T, mPostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MPosts and returns the data updated in the database.
     * @param {mPostUpdateManyAndReturnArgs} args - Arguments to update many MPosts.
     * @example
     * // Update many MPosts
     * const mPost = await prisma.mPost.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MPosts and only return the `id`
     * const mPostWithIdOnly = await prisma.mPost.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends mPostUpdateManyAndReturnArgs>(args: SelectSubset<T, mPostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mPostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MPost.
     * @param {mPostUpsertArgs} args - Arguments to update or create a MPost.
     * @example
     * // Update or create a MPost
     * const mPost = await prisma.mPost.upsert({
     *   create: {
     *     // ... data to create a MPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MPost we want to update
     *   }
     * })
     */
    upsert<T extends mPostUpsertArgs>(args: SelectSubset<T, mPostUpsertArgs<ExtArgs>>): Prisma__mPostClient<$Result.GetResult<Prisma.$mPostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mPostCountArgs} args - Arguments to filter MPosts to count.
     * @example
     * // Count the number of MPosts
     * const count = await prisma.mPost.count({
     *   where: {
     *     // ... the filter for the MPosts we want to count
     *   }
     * })
    **/
    count<T extends mPostCountArgs>(
      args?: Subset<T, mPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MPostAggregateArgs>(args: Subset<T, MPostAggregateArgs>): Prisma.PrismaPromise<GetMPostAggregateType<T>>

    /**
     * Group by MPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mPostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends mPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: mPostGroupByArgs['orderBy'] }
        : { orderBy?: mPostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, mPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the mPost model
   */
  readonly fields: mPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for mPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__mPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mUser<T extends mUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, mUserDefaultArgs<ExtArgs>>): Prisma__mUserClient<$Result.GetResult<Prisma.$mUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    likes<T extends mPost$likesArgs<ExtArgs> = {}>(args?: Subset<T, mPost$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the mPost model
   */
  interface mPostFieldRefs {
    readonly id: FieldRef<"mPost", 'Int'>
    readonly url: FieldRef<"mPost", 'String'>
    readonly title: FieldRef<"mPost", 'String'>
    readonly post_ower: FieldRef<"mPost", 'String'>
    readonly like_num: FieldRef<"mPost", 'Int'>
    readonly post_owner: FieldRef<"mPost", 'String'>
  }
    

  // Custom InputTypes
  /**
   * mPost findUnique
   */
  export type mPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mPost
     */
    select?: mPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mPost
     */
    omit?: mPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mPostInclude<ExtArgs> | null
    /**
     * Filter, which mPost to fetch.
     */
    where: mPostWhereUniqueInput
  }

  /**
   * mPost findUniqueOrThrow
   */
  export type mPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mPost
     */
    select?: mPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mPost
     */
    omit?: mPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mPostInclude<ExtArgs> | null
    /**
     * Filter, which mPost to fetch.
     */
    where: mPostWhereUniqueInput
  }

  /**
   * mPost findFirst
   */
  export type mPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mPost
     */
    select?: mPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mPost
     */
    omit?: mPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mPostInclude<ExtArgs> | null
    /**
     * Filter, which mPost to fetch.
     */
    where?: mPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mPosts to fetch.
     */
    orderBy?: mPostOrderByWithRelationInput | mPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mPosts.
     */
    cursor?: mPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mPosts.
     */
    distinct?: MPostScalarFieldEnum | MPostScalarFieldEnum[]
  }

  /**
   * mPost findFirstOrThrow
   */
  export type mPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mPost
     */
    select?: mPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mPost
     */
    omit?: mPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mPostInclude<ExtArgs> | null
    /**
     * Filter, which mPost to fetch.
     */
    where?: mPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mPosts to fetch.
     */
    orderBy?: mPostOrderByWithRelationInput | mPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mPosts.
     */
    cursor?: mPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mPosts.
     */
    distinct?: MPostScalarFieldEnum | MPostScalarFieldEnum[]
  }

  /**
   * mPost findMany
   */
  export type mPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mPost
     */
    select?: mPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mPost
     */
    omit?: mPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mPostInclude<ExtArgs> | null
    /**
     * Filter, which mPosts to fetch.
     */
    where?: mPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mPosts to fetch.
     */
    orderBy?: mPostOrderByWithRelationInput | mPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mPosts.
     */
    cursor?: mPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mPosts.
     */
    skip?: number
    distinct?: MPostScalarFieldEnum | MPostScalarFieldEnum[]
  }

  /**
   * mPost create
   */
  export type mPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mPost
     */
    select?: mPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mPost
     */
    omit?: mPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mPostInclude<ExtArgs> | null
    /**
     * The data needed to create a mPost.
     */
    data: XOR<mPostCreateInput, mPostUncheckedCreateInput>
  }

  /**
   * mPost createMany
   */
  export type mPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many mPosts.
     */
    data: mPostCreateManyInput | mPostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * mPost createManyAndReturn
   */
  export type mPostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mPost
     */
    select?: mPostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the mPost
     */
    omit?: mPostOmit<ExtArgs> | null
    /**
     * The data used to create many mPosts.
     */
    data: mPostCreateManyInput | mPostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mPostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * mPost update
   */
  export type mPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mPost
     */
    select?: mPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mPost
     */
    omit?: mPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mPostInclude<ExtArgs> | null
    /**
     * The data needed to update a mPost.
     */
    data: XOR<mPostUpdateInput, mPostUncheckedUpdateInput>
    /**
     * Choose, which mPost to update.
     */
    where: mPostWhereUniqueInput
  }

  /**
   * mPost updateMany
   */
  export type mPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update mPosts.
     */
    data: XOR<mPostUpdateManyMutationInput, mPostUncheckedUpdateManyInput>
    /**
     * Filter which mPosts to update
     */
    where?: mPostWhereInput
    /**
     * Limit how many mPosts to update.
     */
    limit?: number
  }

  /**
   * mPost updateManyAndReturn
   */
  export type mPostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mPost
     */
    select?: mPostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the mPost
     */
    omit?: mPostOmit<ExtArgs> | null
    /**
     * The data used to update mPosts.
     */
    data: XOR<mPostUpdateManyMutationInput, mPostUncheckedUpdateManyInput>
    /**
     * Filter which mPosts to update
     */
    where?: mPostWhereInput
    /**
     * Limit how many mPosts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mPostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * mPost upsert
   */
  export type mPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mPost
     */
    select?: mPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mPost
     */
    omit?: mPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mPostInclude<ExtArgs> | null
    /**
     * The filter to search for the mPost to update in case it exists.
     */
    where: mPostWhereUniqueInput
    /**
     * In case the mPost found by the `where` argument doesn't exist, create a new mPost with this data.
     */
    create: XOR<mPostCreateInput, mPostUncheckedCreateInput>
    /**
     * In case the mPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mPostUpdateInput, mPostUncheckedUpdateInput>
  }

  /**
   * mPost delete
   */
  export type mPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mPost
     */
    select?: mPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mPost
     */
    omit?: mPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mPostInclude<ExtArgs> | null
    /**
     * Filter which mPost to delete.
     */
    where: mPostWhereUniqueInput
  }

  /**
   * mPost deleteMany
   */
  export type mPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mPosts to delete
     */
    where?: mPostWhereInput
    /**
     * Limit how many mPosts to delete.
     */
    limit?: number
  }

  /**
   * mPost.likes
   */
  export type mPost$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tLike
     */
    select?: tLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tLike
     */
    omit?: tLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tLikeInclude<ExtArgs> | null
    where?: tLikeWhereInput
    orderBy?: tLikeOrderByWithRelationInput | tLikeOrderByWithRelationInput[]
    cursor?: tLikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TLikeScalarFieldEnum | TLikeScalarFieldEnum[]
  }

  /**
   * mPost without action
   */
  export type mPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mPost
     */
    select?: mPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mPost
     */
    omit?: mPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mPostInclude<ExtArgs> | null
  }


  /**
   * Model mUser
   */

  export type AggregateMUser = {
    _count: MUserCountAggregateOutputType | null
    _avg: MUserAvgAggregateOutputType | null
    _sum: MUserSumAggregateOutputType | null
    _min: MUserMinAggregateOutputType | null
    _max: MUserMaxAggregateOutputType | null
  }

  export type MUserAvgAggregateOutputType = {
    num_follower: number | null
    num_following: number | null
  }

  export type MUserSumAggregateOutputType = {
    num_follower: number | null
    num_following: number | null
  }

  export type MUserMinAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    email: string | null
    display_name: string | null
    num_follower: number | null
    num_following: number | null
  }

  export type MUserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    email: string | null
    display_name: string | null
    num_follower: number | null
    num_following: number | null
  }

  export type MUserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    email: number
    display_name: number
    num_follower: number
    folower_id: number
    num_following: number
    follwing_id: number
    _all: number
  }


  export type MUserAvgAggregateInputType = {
    num_follower?: true
    num_following?: true
  }

  export type MUserSumAggregateInputType = {
    num_follower?: true
    num_following?: true
  }

  export type MUserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    email?: true
    display_name?: true
    num_follower?: true
    num_following?: true
  }

  export type MUserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    email?: true
    display_name?: true
    num_follower?: true
    num_following?: true
  }

  export type MUserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    email?: true
    display_name?: true
    num_follower?: true
    folower_id?: true
    num_following?: true
    follwing_id?: true
    _all?: true
  }

  export type MUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mUser to aggregate.
     */
    where?: mUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mUsers to fetch.
     */
    orderBy?: mUserOrderByWithRelationInput | mUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: mUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned mUsers
    **/
    _count?: true | MUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MUserMaxAggregateInputType
  }

  export type GetMUserAggregateType<T extends MUserAggregateArgs> = {
        [P in keyof T & keyof AggregateMUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMUser[P]>
      : GetScalarType<T[P], AggregateMUser[P]>
  }




  export type mUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: mUserWhereInput
    orderBy?: mUserOrderByWithAggregationInput | mUserOrderByWithAggregationInput[]
    by: MUserScalarFieldEnum[] | MUserScalarFieldEnum
    having?: mUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MUserCountAggregateInputType | true
    _avg?: MUserAvgAggregateInputType
    _sum?: MUserSumAggregateInputType
    _min?: MUserMinAggregateInputType
    _max?: MUserMaxAggregateInputType
  }

  export type MUserGroupByOutputType = {
    id: string
    username: string
    password: string
    email: string
    display_name: string
    num_follower: number
    folower_id: JsonValue
    num_following: number
    follwing_id: JsonValue
    _count: MUserCountAggregateOutputType | null
    _avg: MUserAvgAggregateOutputType | null
    _sum: MUserSumAggregateOutputType | null
    _min: MUserMinAggregateOutputType | null
    _max: MUserMaxAggregateOutputType | null
  }

  type GetMUserGroupByPayload<T extends mUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MUserGroupByOutputType[P]>
            : GetScalarType<T[P], MUserGroupByOutputType[P]>
        }
      >
    >


  export type mUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    display_name?: boolean
    num_follower?: boolean
    folower_id?: boolean
    num_following?: boolean
    follwing_id?: boolean
    user_post?: boolean | mUser$user_postArgs<ExtArgs>
    likes?: boolean | mUser$likesArgs<ExtArgs>
    _count?: boolean | MUserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mUser"]>

  export type mUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    display_name?: boolean
    num_follower?: boolean
    folower_id?: boolean
    num_following?: boolean
    follwing_id?: boolean
  }, ExtArgs["result"]["mUser"]>

  export type mUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    display_name?: boolean
    num_follower?: boolean
    folower_id?: boolean
    num_following?: boolean
    follwing_id?: boolean
  }, ExtArgs["result"]["mUser"]>

  export type mUserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    display_name?: boolean
    num_follower?: boolean
    folower_id?: boolean
    num_following?: boolean
    follwing_id?: boolean
  }

  export type mUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "email" | "display_name" | "num_follower" | "folower_id" | "num_following" | "follwing_id", ExtArgs["result"]["mUser"]>
  export type mUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_post?: boolean | mUser$user_postArgs<ExtArgs>
    likes?: boolean | mUser$likesArgs<ExtArgs>
    _count?: boolean | MUserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type mUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type mUserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $mUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "mUser"
    objects: {
      user_post: Prisma.$mPostPayload<ExtArgs>[]
      likes: Prisma.$tLikePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      password: string
      email: string
      display_name: string
      num_follower: number
      folower_id: Prisma.JsonValue
      num_following: number
      follwing_id: Prisma.JsonValue
    }, ExtArgs["result"]["mUser"]>
    composites: {}
  }

  type mUserGetPayload<S extends boolean | null | undefined | mUserDefaultArgs> = $Result.GetResult<Prisma.$mUserPayload, S>

  type mUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<mUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MUserCountAggregateInputType | true
    }

  export interface mUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['mUser'], meta: { name: 'mUser' } }
    /**
     * Find zero or one MUser that matches the filter.
     * @param {mUserFindUniqueArgs} args - Arguments to find a MUser
     * @example
     * // Get one MUser
     * const mUser = await prisma.mUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends mUserFindUniqueArgs>(args: SelectSubset<T, mUserFindUniqueArgs<ExtArgs>>): Prisma__mUserClient<$Result.GetResult<Prisma.$mUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {mUserFindUniqueOrThrowArgs} args - Arguments to find a MUser
     * @example
     * // Get one MUser
     * const mUser = await prisma.mUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends mUserFindUniqueOrThrowArgs>(args: SelectSubset<T, mUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__mUserClient<$Result.GetResult<Prisma.$mUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mUserFindFirstArgs} args - Arguments to find a MUser
     * @example
     * // Get one MUser
     * const mUser = await prisma.mUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends mUserFindFirstArgs>(args?: SelectSubset<T, mUserFindFirstArgs<ExtArgs>>): Prisma__mUserClient<$Result.GetResult<Prisma.$mUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mUserFindFirstOrThrowArgs} args - Arguments to find a MUser
     * @example
     * // Get one MUser
     * const mUser = await prisma.mUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends mUserFindFirstOrThrowArgs>(args?: SelectSubset<T, mUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__mUserClient<$Result.GetResult<Prisma.$mUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MUsers
     * const mUsers = await prisma.mUser.findMany()
     * 
     * // Get first 10 MUsers
     * const mUsers = await prisma.mUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mUserWithIdOnly = await prisma.mUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends mUserFindManyArgs>(args?: SelectSubset<T, mUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MUser.
     * @param {mUserCreateArgs} args - Arguments to create a MUser.
     * @example
     * // Create one MUser
     * const MUser = await prisma.mUser.create({
     *   data: {
     *     // ... data to create a MUser
     *   }
     * })
     * 
     */
    create<T extends mUserCreateArgs>(args: SelectSubset<T, mUserCreateArgs<ExtArgs>>): Prisma__mUserClient<$Result.GetResult<Prisma.$mUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MUsers.
     * @param {mUserCreateManyArgs} args - Arguments to create many MUsers.
     * @example
     * // Create many MUsers
     * const mUser = await prisma.mUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends mUserCreateManyArgs>(args?: SelectSubset<T, mUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MUsers and returns the data saved in the database.
     * @param {mUserCreateManyAndReturnArgs} args - Arguments to create many MUsers.
     * @example
     * // Create many MUsers
     * const mUser = await prisma.mUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MUsers and only return the `id`
     * const mUserWithIdOnly = await prisma.mUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends mUserCreateManyAndReturnArgs>(args?: SelectSubset<T, mUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MUser.
     * @param {mUserDeleteArgs} args - Arguments to delete one MUser.
     * @example
     * // Delete one MUser
     * const MUser = await prisma.mUser.delete({
     *   where: {
     *     // ... filter to delete one MUser
     *   }
     * })
     * 
     */
    delete<T extends mUserDeleteArgs>(args: SelectSubset<T, mUserDeleteArgs<ExtArgs>>): Prisma__mUserClient<$Result.GetResult<Prisma.$mUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MUser.
     * @param {mUserUpdateArgs} args - Arguments to update one MUser.
     * @example
     * // Update one MUser
     * const mUser = await prisma.mUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends mUserUpdateArgs>(args: SelectSubset<T, mUserUpdateArgs<ExtArgs>>): Prisma__mUserClient<$Result.GetResult<Prisma.$mUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MUsers.
     * @param {mUserDeleteManyArgs} args - Arguments to filter MUsers to delete.
     * @example
     * // Delete a few MUsers
     * const { count } = await prisma.mUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends mUserDeleteManyArgs>(args?: SelectSubset<T, mUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MUsers
     * const mUser = await prisma.mUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends mUserUpdateManyArgs>(args: SelectSubset<T, mUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MUsers and returns the data updated in the database.
     * @param {mUserUpdateManyAndReturnArgs} args - Arguments to update many MUsers.
     * @example
     * // Update many MUsers
     * const mUser = await prisma.mUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MUsers and only return the `id`
     * const mUserWithIdOnly = await prisma.mUser.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends mUserUpdateManyAndReturnArgs>(args: SelectSubset<T, mUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MUser.
     * @param {mUserUpsertArgs} args - Arguments to update or create a MUser.
     * @example
     * // Update or create a MUser
     * const mUser = await prisma.mUser.upsert({
     *   create: {
     *     // ... data to create a MUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MUser we want to update
     *   }
     * })
     */
    upsert<T extends mUserUpsertArgs>(args: SelectSubset<T, mUserUpsertArgs<ExtArgs>>): Prisma__mUserClient<$Result.GetResult<Prisma.$mUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mUserCountArgs} args - Arguments to filter MUsers to count.
     * @example
     * // Count the number of MUsers
     * const count = await prisma.mUser.count({
     *   where: {
     *     // ... the filter for the MUsers we want to count
     *   }
     * })
    **/
    count<T extends mUserCountArgs>(
      args?: Subset<T, mUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MUserAggregateArgs>(args: Subset<T, MUserAggregateArgs>): Prisma.PrismaPromise<GetMUserAggregateType<T>>

    /**
     * Group by MUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {mUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends mUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: mUserGroupByArgs['orderBy'] }
        : { orderBy?: mUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, mUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the mUser model
   */
  readonly fields: mUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for mUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__mUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user_post<T extends mUser$user_postArgs<ExtArgs> = {}>(args?: Subset<T, mUser$user_postArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$mPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likes<T extends mUser$likesArgs<ExtArgs> = {}>(args?: Subset<T, mUser$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the mUser model
   */
  interface mUserFieldRefs {
    readonly id: FieldRef<"mUser", 'String'>
    readonly username: FieldRef<"mUser", 'String'>
    readonly password: FieldRef<"mUser", 'String'>
    readonly email: FieldRef<"mUser", 'String'>
    readonly display_name: FieldRef<"mUser", 'String'>
    readonly num_follower: FieldRef<"mUser", 'Int'>
    readonly folower_id: FieldRef<"mUser", 'Json'>
    readonly num_following: FieldRef<"mUser", 'Int'>
    readonly follwing_id: FieldRef<"mUser", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * mUser findUnique
   */
  export type mUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mUser
     */
    select?: mUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mUser
     */
    omit?: mUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mUserInclude<ExtArgs> | null
    /**
     * Filter, which mUser to fetch.
     */
    where: mUserWhereUniqueInput
  }

  /**
   * mUser findUniqueOrThrow
   */
  export type mUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mUser
     */
    select?: mUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mUser
     */
    omit?: mUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mUserInclude<ExtArgs> | null
    /**
     * Filter, which mUser to fetch.
     */
    where: mUserWhereUniqueInput
  }

  /**
   * mUser findFirst
   */
  export type mUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mUser
     */
    select?: mUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mUser
     */
    omit?: mUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mUserInclude<ExtArgs> | null
    /**
     * Filter, which mUser to fetch.
     */
    where?: mUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mUsers to fetch.
     */
    orderBy?: mUserOrderByWithRelationInput | mUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mUsers.
     */
    cursor?: mUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mUsers.
     */
    distinct?: MUserScalarFieldEnum | MUserScalarFieldEnum[]
  }

  /**
   * mUser findFirstOrThrow
   */
  export type mUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mUser
     */
    select?: mUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mUser
     */
    omit?: mUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mUserInclude<ExtArgs> | null
    /**
     * Filter, which mUser to fetch.
     */
    where?: mUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mUsers to fetch.
     */
    orderBy?: mUserOrderByWithRelationInput | mUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for mUsers.
     */
    cursor?: mUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of mUsers.
     */
    distinct?: MUserScalarFieldEnum | MUserScalarFieldEnum[]
  }

  /**
   * mUser findMany
   */
  export type mUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mUser
     */
    select?: mUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mUser
     */
    omit?: mUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mUserInclude<ExtArgs> | null
    /**
     * Filter, which mUsers to fetch.
     */
    where?: mUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of mUsers to fetch.
     */
    orderBy?: mUserOrderByWithRelationInput | mUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing mUsers.
     */
    cursor?: mUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` mUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` mUsers.
     */
    skip?: number
    distinct?: MUserScalarFieldEnum | MUserScalarFieldEnum[]
  }

  /**
   * mUser create
   */
  export type mUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mUser
     */
    select?: mUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mUser
     */
    omit?: mUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mUserInclude<ExtArgs> | null
    /**
     * The data needed to create a mUser.
     */
    data: XOR<mUserCreateInput, mUserUncheckedCreateInput>
  }

  /**
   * mUser createMany
   */
  export type mUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many mUsers.
     */
    data: mUserCreateManyInput | mUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * mUser createManyAndReturn
   */
  export type mUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mUser
     */
    select?: mUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the mUser
     */
    omit?: mUserOmit<ExtArgs> | null
    /**
     * The data used to create many mUsers.
     */
    data: mUserCreateManyInput | mUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * mUser update
   */
  export type mUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mUser
     */
    select?: mUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mUser
     */
    omit?: mUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mUserInclude<ExtArgs> | null
    /**
     * The data needed to update a mUser.
     */
    data: XOR<mUserUpdateInput, mUserUncheckedUpdateInput>
    /**
     * Choose, which mUser to update.
     */
    where: mUserWhereUniqueInput
  }

  /**
   * mUser updateMany
   */
  export type mUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update mUsers.
     */
    data: XOR<mUserUpdateManyMutationInput, mUserUncheckedUpdateManyInput>
    /**
     * Filter which mUsers to update
     */
    where?: mUserWhereInput
    /**
     * Limit how many mUsers to update.
     */
    limit?: number
  }

  /**
   * mUser updateManyAndReturn
   */
  export type mUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mUser
     */
    select?: mUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the mUser
     */
    omit?: mUserOmit<ExtArgs> | null
    /**
     * The data used to update mUsers.
     */
    data: XOR<mUserUpdateManyMutationInput, mUserUncheckedUpdateManyInput>
    /**
     * Filter which mUsers to update
     */
    where?: mUserWhereInput
    /**
     * Limit how many mUsers to update.
     */
    limit?: number
  }

  /**
   * mUser upsert
   */
  export type mUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mUser
     */
    select?: mUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mUser
     */
    omit?: mUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mUserInclude<ExtArgs> | null
    /**
     * The filter to search for the mUser to update in case it exists.
     */
    where: mUserWhereUniqueInput
    /**
     * In case the mUser found by the `where` argument doesn't exist, create a new mUser with this data.
     */
    create: XOR<mUserCreateInput, mUserUncheckedCreateInput>
    /**
     * In case the mUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<mUserUpdateInput, mUserUncheckedUpdateInput>
  }

  /**
   * mUser delete
   */
  export type mUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mUser
     */
    select?: mUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mUser
     */
    omit?: mUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mUserInclude<ExtArgs> | null
    /**
     * Filter which mUser to delete.
     */
    where: mUserWhereUniqueInput
  }

  /**
   * mUser deleteMany
   */
  export type mUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which mUsers to delete
     */
    where?: mUserWhereInput
    /**
     * Limit how many mUsers to delete.
     */
    limit?: number
  }

  /**
   * mUser.user_post
   */
  export type mUser$user_postArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mPost
     */
    select?: mPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mPost
     */
    omit?: mPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mPostInclude<ExtArgs> | null
    where?: mPostWhereInput
    orderBy?: mPostOrderByWithRelationInput | mPostOrderByWithRelationInput[]
    cursor?: mPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MPostScalarFieldEnum | MPostScalarFieldEnum[]
  }

  /**
   * mUser.likes
   */
  export type mUser$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tLike
     */
    select?: tLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tLike
     */
    omit?: tLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tLikeInclude<ExtArgs> | null
    where?: tLikeWhereInput
    orderBy?: tLikeOrderByWithRelationInput | tLikeOrderByWithRelationInput[]
    cursor?: tLikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TLikeScalarFieldEnum | TLikeScalarFieldEnum[]
  }

  /**
   * mUser without action
   */
  export type mUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the mUser
     */
    select?: mUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the mUser
     */
    omit?: mUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: mUserInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const TLikeScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    post_id: 'post_id'
  };

  export type TLikeScalarFieldEnum = (typeof TLikeScalarFieldEnum)[keyof typeof TLikeScalarFieldEnum]


  export const MPostScalarFieldEnum: {
    id: 'id',
    url: 'url',
    title: 'title',
    post_ower: 'post_ower',
    like_num: 'like_num',
    post_owner: 'post_owner'
  };

  export type MPostScalarFieldEnum = (typeof MPostScalarFieldEnum)[keyof typeof MPostScalarFieldEnum]


  export const MUserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    email: 'email',
    display_name: 'display_name',
    num_follower: 'num_follower',
    folower_id: 'folower_id',
    num_following: 'num_following',
    follwing_id: 'follwing_id'
  };

  export type MUserScalarFieldEnum = (typeof MUserScalarFieldEnum)[keyof typeof MUserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type tLikeWhereInput = {
    AND?: tLikeWhereInput | tLikeWhereInput[]
    OR?: tLikeWhereInput[]
    NOT?: tLikeWhereInput | tLikeWhereInput[]
    id?: IntFilter<"tLike"> | number
    user_id?: StringFilter<"tLike"> | string
    post_id?: IntFilter<"tLike"> | number
    user?: XOR<MUserScalarRelationFilter, mUserWhereInput>
    post?: XOR<MPostScalarRelationFilter, mPostWhereInput>
  }

  export type tLikeOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    post_id?: SortOrder
    user?: mUserOrderByWithRelationInput
    post?: mPostOrderByWithRelationInput
  }

  export type tLikeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    user_id_post_id?: tLikeUser_idPost_idCompoundUniqueInput
    AND?: tLikeWhereInput | tLikeWhereInput[]
    OR?: tLikeWhereInput[]
    NOT?: tLikeWhereInput | tLikeWhereInput[]
    user_id?: StringFilter<"tLike"> | string
    post_id?: IntFilter<"tLike"> | number
    user?: XOR<MUserScalarRelationFilter, mUserWhereInput>
    post?: XOR<MPostScalarRelationFilter, mPostWhereInput>
  }, "id" | "user_id_post_id">

  export type tLikeOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    post_id?: SortOrder
    _count?: tLikeCountOrderByAggregateInput
    _avg?: tLikeAvgOrderByAggregateInput
    _max?: tLikeMaxOrderByAggregateInput
    _min?: tLikeMinOrderByAggregateInput
    _sum?: tLikeSumOrderByAggregateInput
  }

  export type tLikeScalarWhereWithAggregatesInput = {
    AND?: tLikeScalarWhereWithAggregatesInput | tLikeScalarWhereWithAggregatesInput[]
    OR?: tLikeScalarWhereWithAggregatesInput[]
    NOT?: tLikeScalarWhereWithAggregatesInput | tLikeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tLike"> | number
    user_id?: StringWithAggregatesFilter<"tLike"> | string
    post_id?: IntWithAggregatesFilter<"tLike"> | number
  }

  export type mPostWhereInput = {
    AND?: mPostWhereInput | mPostWhereInput[]
    OR?: mPostWhereInput[]
    NOT?: mPostWhereInput | mPostWhereInput[]
    id?: IntFilter<"mPost"> | number
    url?: StringFilter<"mPost"> | string
    title?: StringNullableFilter<"mPost"> | string | null
    post_ower?: StringFilter<"mPost"> | string
    like_num?: IntFilter<"mPost"> | number
    post_owner?: StringFilter<"mPost"> | string
    mUser?: XOR<MUserScalarRelationFilter, mUserWhereInput>
    likes?: TLikeListRelationFilter
  }

  export type mPostOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrderInput | SortOrder
    post_ower?: SortOrder
    like_num?: SortOrder
    post_owner?: SortOrder
    mUser?: mUserOrderByWithRelationInput
    likes?: tLikeOrderByRelationAggregateInput
  }

  export type mPostWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: mPostWhereInput | mPostWhereInput[]
    OR?: mPostWhereInput[]
    NOT?: mPostWhereInput | mPostWhereInput[]
    url?: StringFilter<"mPost"> | string
    title?: StringNullableFilter<"mPost"> | string | null
    post_ower?: StringFilter<"mPost"> | string
    like_num?: IntFilter<"mPost"> | number
    post_owner?: StringFilter<"mPost"> | string
    mUser?: XOR<MUserScalarRelationFilter, mUserWhereInput>
    likes?: TLikeListRelationFilter
  }, "id" | "id">

  export type mPostOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrderInput | SortOrder
    post_ower?: SortOrder
    like_num?: SortOrder
    post_owner?: SortOrder
    _count?: mPostCountOrderByAggregateInput
    _avg?: mPostAvgOrderByAggregateInput
    _max?: mPostMaxOrderByAggregateInput
    _min?: mPostMinOrderByAggregateInput
    _sum?: mPostSumOrderByAggregateInput
  }

  export type mPostScalarWhereWithAggregatesInput = {
    AND?: mPostScalarWhereWithAggregatesInput | mPostScalarWhereWithAggregatesInput[]
    OR?: mPostScalarWhereWithAggregatesInput[]
    NOT?: mPostScalarWhereWithAggregatesInput | mPostScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"mPost"> | number
    url?: StringWithAggregatesFilter<"mPost"> | string
    title?: StringNullableWithAggregatesFilter<"mPost"> | string | null
    post_ower?: StringWithAggregatesFilter<"mPost"> | string
    like_num?: IntWithAggregatesFilter<"mPost"> | number
    post_owner?: StringWithAggregatesFilter<"mPost"> | string
  }

  export type mUserWhereInput = {
    AND?: mUserWhereInput | mUserWhereInput[]
    OR?: mUserWhereInput[]
    NOT?: mUserWhereInput | mUserWhereInput[]
    id?: StringFilter<"mUser"> | string
    username?: StringFilter<"mUser"> | string
    password?: StringFilter<"mUser"> | string
    email?: StringFilter<"mUser"> | string
    display_name?: StringFilter<"mUser"> | string
    num_follower?: IntFilter<"mUser"> | number
    folower_id?: JsonFilter<"mUser">
    num_following?: IntFilter<"mUser"> | number
    follwing_id?: JsonFilter<"mUser">
    user_post?: MPostListRelationFilter
    likes?: TLikeListRelationFilter
  }

  export type mUserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    display_name?: SortOrder
    num_follower?: SortOrder
    folower_id?: SortOrder
    num_following?: SortOrder
    follwing_id?: SortOrder
    user_post?: mPostOrderByRelationAggregateInput
    likes?: tLikeOrderByRelationAggregateInput
  }

  export type mUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: mUserWhereInput | mUserWhereInput[]
    OR?: mUserWhereInput[]
    NOT?: mUserWhereInput | mUserWhereInput[]
    password?: StringFilter<"mUser"> | string
    email?: StringFilter<"mUser"> | string
    display_name?: StringFilter<"mUser"> | string
    num_follower?: IntFilter<"mUser"> | number
    folower_id?: JsonFilter<"mUser">
    num_following?: IntFilter<"mUser"> | number
    follwing_id?: JsonFilter<"mUser">
    user_post?: MPostListRelationFilter
    likes?: TLikeListRelationFilter
  }, "id" | "username">

  export type mUserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    display_name?: SortOrder
    num_follower?: SortOrder
    folower_id?: SortOrder
    num_following?: SortOrder
    follwing_id?: SortOrder
    _count?: mUserCountOrderByAggregateInput
    _avg?: mUserAvgOrderByAggregateInput
    _max?: mUserMaxOrderByAggregateInput
    _min?: mUserMinOrderByAggregateInput
    _sum?: mUserSumOrderByAggregateInput
  }

  export type mUserScalarWhereWithAggregatesInput = {
    AND?: mUserScalarWhereWithAggregatesInput | mUserScalarWhereWithAggregatesInput[]
    OR?: mUserScalarWhereWithAggregatesInput[]
    NOT?: mUserScalarWhereWithAggregatesInput | mUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"mUser"> | string
    username?: StringWithAggregatesFilter<"mUser"> | string
    password?: StringWithAggregatesFilter<"mUser"> | string
    email?: StringWithAggregatesFilter<"mUser"> | string
    display_name?: StringWithAggregatesFilter<"mUser"> | string
    num_follower?: IntWithAggregatesFilter<"mUser"> | number
    folower_id?: JsonWithAggregatesFilter<"mUser">
    num_following?: IntWithAggregatesFilter<"mUser"> | number
    follwing_id?: JsonWithAggregatesFilter<"mUser">
  }

  export type tLikeCreateInput = {
    user: mUserCreateNestedOneWithoutLikesInput
    post: mPostCreateNestedOneWithoutLikesInput
  }

  export type tLikeUncheckedCreateInput = {
    id?: number
    user_id: string
    post_id: number
  }

  export type tLikeUpdateInput = {
    user?: mUserUpdateOneRequiredWithoutLikesNestedInput
    post?: mPostUpdateOneRequiredWithoutLikesNestedInput
  }

  export type tLikeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    post_id?: IntFieldUpdateOperationsInput | number
  }

  export type tLikeCreateManyInput = {
    id?: number
    user_id: string
    post_id: number
  }

  export type tLikeUpdateManyMutationInput = {

  }

  export type tLikeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    post_id?: IntFieldUpdateOperationsInput | number
  }

  export type mPostCreateInput = {
    url: string
    title?: string | null
    post_ower: string
    like_num?: number
    mUser: mUserCreateNestedOneWithoutUser_postInput
    likes?: tLikeCreateNestedManyWithoutPostInput
  }

  export type mPostUncheckedCreateInput = {
    id?: number
    url: string
    title?: string | null
    post_ower: string
    like_num?: number
    post_owner: string
    likes?: tLikeUncheckedCreateNestedManyWithoutPostInput
  }

  export type mPostUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    post_ower?: StringFieldUpdateOperationsInput | string
    like_num?: IntFieldUpdateOperationsInput | number
    mUser?: mUserUpdateOneRequiredWithoutUser_postNestedInput
    likes?: tLikeUpdateManyWithoutPostNestedInput
  }

  export type mPostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    post_ower?: StringFieldUpdateOperationsInput | string
    like_num?: IntFieldUpdateOperationsInput | number
    post_owner?: StringFieldUpdateOperationsInput | string
    likes?: tLikeUncheckedUpdateManyWithoutPostNestedInput
  }

  export type mPostCreateManyInput = {
    id?: number
    url: string
    title?: string | null
    post_ower: string
    like_num?: number
    post_owner: string
  }

  export type mPostUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    post_ower?: StringFieldUpdateOperationsInput | string
    like_num?: IntFieldUpdateOperationsInput | number
  }

  export type mPostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    post_ower?: StringFieldUpdateOperationsInput | string
    like_num?: IntFieldUpdateOperationsInput | number
    post_owner?: StringFieldUpdateOperationsInput | string
  }

  export type mUserCreateInput = {
    id?: string
    username: string
    password: string
    email: string
    display_name: string
    num_follower?: number
    folower_id: JsonNullValueInput | InputJsonValue
    num_following?: number
    follwing_id: JsonNullValueInput | InputJsonValue
    user_post?: mPostCreateNestedManyWithoutMUserInput
    likes?: tLikeCreateNestedManyWithoutUserInput
  }

  export type mUserUncheckedCreateInput = {
    id?: string
    username: string
    password: string
    email: string
    display_name: string
    num_follower?: number
    folower_id: JsonNullValueInput | InputJsonValue
    num_following?: number
    follwing_id: JsonNullValueInput | InputJsonValue
    user_post?: mPostUncheckedCreateNestedManyWithoutMUserInput
    likes?: tLikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type mUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    num_follower?: IntFieldUpdateOperationsInput | number
    folower_id?: JsonNullValueInput | InputJsonValue
    num_following?: IntFieldUpdateOperationsInput | number
    follwing_id?: JsonNullValueInput | InputJsonValue
    user_post?: mPostUpdateManyWithoutMUserNestedInput
    likes?: tLikeUpdateManyWithoutUserNestedInput
  }

  export type mUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    num_follower?: IntFieldUpdateOperationsInput | number
    folower_id?: JsonNullValueInput | InputJsonValue
    num_following?: IntFieldUpdateOperationsInput | number
    follwing_id?: JsonNullValueInput | InputJsonValue
    user_post?: mPostUncheckedUpdateManyWithoutMUserNestedInput
    likes?: tLikeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type mUserCreateManyInput = {
    id?: string
    username: string
    password: string
    email: string
    display_name: string
    num_follower?: number
    folower_id: JsonNullValueInput | InputJsonValue
    num_following?: number
    follwing_id: JsonNullValueInput | InputJsonValue
  }

  export type mUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    num_follower?: IntFieldUpdateOperationsInput | number
    folower_id?: JsonNullValueInput | InputJsonValue
    num_following?: IntFieldUpdateOperationsInput | number
    follwing_id?: JsonNullValueInput | InputJsonValue
  }

  export type mUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    num_follower?: IntFieldUpdateOperationsInput | number
    folower_id?: JsonNullValueInput | InputJsonValue
    num_following?: IntFieldUpdateOperationsInput | number
    follwing_id?: JsonNullValueInput | InputJsonValue
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type MUserScalarRelationFilter = {
    is?: mUserWhereInput
    isNot?: mUserWhereInput
  }

  export type MPostScalarRelationFilter = {
    is?: mPostWhereInput
    isNot?: mPostWhereInput
  }

  export type tLikeUser_idPost_idCompoundUniqueInput = {
    user_id: string
    post_id: number
  }

  export type tLikeCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    post_id?: SortOrder
  }

  export type tLikeAvgOrderByAggregateInput = {
    id?: SortOrder
    post_id?: SortOrder
  }

  export type tLikeMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    post_id?: SortOrder
  }

  export type tLikeMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    post_id?: SortOrder
  }

  export type tLikeSumOrderByAggregateInput = {
    id?: SortOrder
    post_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type TLikeListRelationFilter = {
    every?: tLikeWhereInput
    some?: tLikeWhereInput
    none?: tLikeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type tLikeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type mPostCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrder
    post_ower?: SortOrder
    like_num?: SortOrder
    post_owner?: SortOrder
  }

  export type mPostAvgOrderByAggregateInput = {
    id?: SortOrder
    like_num?: SortOrder
  }

  export type mPostMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrder
    post_ower?: SortOrder
    like_num?: SortOrder
    post_owner?: SortOrder
  }

  export type mPostMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrder
    post_ower?: SortOrder
    like_num?: SortOrder
    post_owner?: SortOrder
  }

  export type mPostSumOrderByAggregateInput = {
    id?: SortOrder
    like_num?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type MPostListRelationFilter = {
    every?: mPostWhereInput
    some?: mPostWhereInput
    none?: mPostWhereInput
  }

  export type mPostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type mUserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    display_name?: SortOrder
    num_follower?: SortOrder
    folower_id?: SortOrder
    num_following?: SortOrder
    follwing_id?: SortOrder
  }

  export type mUserAvgOrderByAggregateInput = {
    num_follower?: SortOrder
    num_following?: SortOrder
  }

  export type mUserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    display_name?: SortOrder
    num_follower?: SortOrder
    num_following?: SortOrder
  }

  export type mUserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    display_name?: SortOrder
    num_follower?: SortOrder
    num_following?: SortOrder
  }

  export type mUserSumOrderByAggregateInput = {
    num_follower?: SortOrder
    num_following?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type mUserCreateNestedOneWithoutLikesInput = {
    create?: XOR<mUserCreateWithoutLikesInput, mUserUncheckedCreateWithoutLikesInput>
    connectOrCreate?: mUserCreateOrConnectWithoutLikesInput
    connect?: mUserWhereUniqueInput
  }

  export type mPostCreateNestedOneWithoutLikesInput = {
    create?: XOR<mPostCreateWithoutLikesInput, mPostUncheckedCreateWithoutLikesInput>
    connectOrCreate?: mPostCreateOrConnectWithoutLikesInput
    connect?: mPostWhereUniqueInput
  }

  export type mUserUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<mUserCreateWithoutLikesInput, mUserUncheckedCreateWithoutLikesInput>
    connectOrCreate?: mUserCreateOrConnectWithoutLikesInput
    upsert?: mUserUpsertWithoutLikesInput
    connect?: mUserWhereUniqueInput
    update?: XOR<XOR<mUserUpdateToOneWithWhereWithoutLikesInput, mUserUpdateWithoutLikesInput>, mUserUncheckedUpdateWithoutLikesInput>
  }

  export type mPostUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<mPostCreateWithoutLikesInput, mPostUncheckedCreateWithoutLikesInput>
    connectOrCreate?: mPostCreateOrConnectWithoutLikesInput
    upsert?: mPostUpsertWithoutLikesInput
    connect?: mPostWhereUniqueInput
    update?: XOR<XOR<mPostUpdateToOneWithWhereWithoutLikesInput, mPostUpdateWithoutLikesInput>, mPostUncheckedUpdateWithoutLikesInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type mUserCreateNestedOneWithoutUser_postInput = {
    create?: XOR<mUserCreateWithoutUser_postInput, mUserUncheckedCreateWithoutUser_postInput>
    connectOrCreate?: mUserCreateOrConnectWithoutUser_postInput
    connect?: mUserWhereUniqueInput
  }

  export type tLikeCreateNestedManyWithoutPostInput = {
    create?: XOR<tLikeCreateWithoutPostInput, tLikeUncheckedCreateWithoutPostInput> | tLikeCreateWithoutPostInput[] | tLikeUncheckedCreateWithoutPostInput[]
    connectOrCreate?: tLikeCreateOrConnectWithoutPostInput | tLikeCreateOrConnectWithoutPostInput[]
    createMany?: tLikeCreateManyPostInputEnvelope
    connect?: tLikeWhereUniqueInput | tLikeWhereUniqueInput[]
  }

  export type tLikeUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<tLikeCreateWithoutPostInput, tLikeUncheckedCreateWithoutPostInput> | tLikeCreateWithoutPostInput[] | tLikeUncheckedCreateWithoutPostInput[]
    connectOrCreate?: tLikeCreateOrConnectWithoutPostInput | tLikeCreateOrConnectWithoutPostInput[]
    createMany?: tLikeCreateManyPostInputEnvelope
    connect?: tLikeWhereUniqueInput | tLikeWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type mUserUpdateOneRequiredWithoutUser_postNestedInput = {
    create?: XOR<mUserCreateWithoutUser_postInput, mUserUncheckedCreateWithoutUser_postInput>
    connectOrCreate?: mUserCreateOrConnectWithoutUser_postInput
    upsert?: mUserUpsertWithoutUser_postInput
    connect?: mUserWhereUniqueInput
    update?: XOR<XOR<mUserUpdateToOneWithWhereWithoutUser_postInput, mUserUpdateWithoutUser_postInput>, mUserUncheckedUpdateWithoutUser_postInput>
  }

  export type tLikeUpdateManyWithoutPostNestedInput = {
    create?: XOR<tLikeCreateWithoutPostInput, tLikeUncheckedCreateWithoutPostInput> | tLikeCreateWithoutPostInput[] | tLikeUncheckedCreateWithoutPostInput[]
    connectOrCreate?: tLikeCreateOrConnectWithoutPostInput | tLikeCreateOrConnectWithoutPostInput[]
    upsert?: tLikeUpsertWithWhereUniqueWithoutPostInput | tLikeUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: tLikeCreateManyPostInputEnvelope
    set?: tLikeWhereUniqueInput | tLikeWhereUniqueInput[]
    disconnect?: tLikeWhereUniqueInput | tLikeWhereUniqueInput[]
    delete?: tLikeWhereUniqueInput | tLikeWhereUniqueInput[]
    connect?: tLikeWhereUniqueInput | tLikeWhereUniqueInput[]
    update?: tLikeUpdateWithWhereUniqueWithoutPostInput | tLikeUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: tLikeUpdateManyWithWhereWithoutPostInput | tLikeUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: tLikeScalarWhereInput | tLikeScalarWhereInput[]
  }

  export type tLikeUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<tLikeCreateWithoutPostInput, tLikeUncheckedCreateWithoutPostInput> | tLikeCreateWithoutPostInput[] | tLikeUncheckedCreateWithoutPostInput[]
    connectOrCreate?: tLikeCreateOrConnectWithoutPostInput | tLikeCreateOrConnectWithoutPostInput[]
    upsert?: tLikeUpsertWithWhereUniqueWithoutPostInput | tLikeUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: tLikeCreateManyPostInputEnvelope
    set?: tLikeWhereUniqueInput | tLikeWhereUniqueInput[]
    disconnect?: tLikeWhereUniqueInput | tLikeWhereUniqueInput[]
    delete?: tLikeWhereUniqueInput | tLikeWhereUniqueInput[]
    connect?: tLikeWhereUniqueInput | tLikeWhereUniqueInput[]
    update?: tLikeUpdateWithWhereUniqueWithoutPostInput | tLikeUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: tLikeUpdateManyWithWhereWithoutPostInput | tLikeUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: tLikeScalarWhereInput | tLikeScalarWhereInput[]
  }

  export type mPostCreateNestedManyWithoutMUserInput = {
    create?: XOR<mPostCreateWithoutMUserInput, mPostUncheckedCreateWithoutMUserInput> | mPostCreateWithoutMUserInput[] | mPostUncheckedCreateWithoutMUserInput[]
    connectOrCreate?: mPostCreateOrConnectWithoutMUserInput | mPostCreateOrConnectWithoutMUserInput[]
    createMany?: mPostCreateManyMUserInputEnvelope
    connect?: mPostWhereUniqueInput | mPostWhereUniqueInput[]
  }

  export type tLikeCreateNestedManyWithoutUserInput = {
    create?: XOR<tLikeCreateWithoutUserInput, tLikeUncheckedCreateWithoutUserInput> | tLikeCreateWithoutUserInput[] | tLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: tLikeCreateOrConnectWithoutUserInput | tLikeCreateOrConnectWithoutUserInput[]
    createMany?: tLikeCreateManyUserInputEnvelope
    connect?: tLikeWhereUniqueInput | tLikeWhereUniqueInput[]
  }

  export type mPostUncheckedCreateNestedManyWithoutMUserInput = {
    create?: XOR<mPostCreateWithoutMUserInput, mPostUncheckedCreateWithoutMUserInput> | mPostCreateWithoutMUserInput[] | mPostUncheckedCreateWithoutMUserInput[]
    connectOrCreate?: mPostCreateOrConnectWithoutMUserInput | mPostCreateOrConnectWithoutMUserInput[]
    createMany?: mPostCreateManyMUserInputEnvelope
    connect?: mPostWhereUniqueInput | mPostWhereUniqueInput[]
  }

  export type tLikeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<tLikeCreateWithoutUserInput, tLikeUncheckedCreateWithoutUserInput> | tLikeCreateWithoutUserInput[] | tLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: tLikeCreateOrConnectWithoutUserInput | tLikeCreateOrConnectWithoutUserInput[]
    createMany?: tLikeCreateManyUserInputEnvelope
    connect?: tLikeWhereUniqueInput | tLikeWhereUniqueInput[]
  }

  export type mPostUpdateManyWithoutMUserNestedInput = {
    create?: XOR<mPostCreateWithoutMUserInput, mPostUncheckedCreateWithoutMUserInput> | mPostCreateWithoutMUserInput[] | mPostUncheckedCreateWithoutMUserInput[]
    connectOrCreate?: mPostCreateOrConnectWithoutMUserInput | mPostCreateOrConnectWithoutMUserInput[]
    upsert?: mPostUpsertWithWhereUniqueWithoutMUserInput | mPostUpsertWithWhereUniqueWithoutMUserInput[]
    createMany?: mPostCreateManyMUserInputEnvelope
    set?: mPostWhereUniqueInput | mPostWhereUniqueInput[]
    disconnect?: mPostWhereUniqueInput | mPostWhereUniqueInput[]
    delete?: mPostWhereUniqueInput | mPostWhereUniqueInput[]
    connect?: mPostWhereUniqueInput | mPostWhereUniqueInput[]
    update?: mPostUpdateWithWhereUniqueWithoutMUserInput | mPostUpdateWithWhereUniqueWithoutMUserInput[]
    updateMany?: mPostUpdateManyWithWhereWithoutMUserInput | mPostUpdateManyWithWhereWithoutMUserInput[]
    deleteMany?: mPostScalarWhereInput | mPostScalarWhereInput[]
  }

  export type tLikeUpdateManyWithoutUserNestedInput = {
    create?: XOR<tLikeCreateWithoutUserInput, tLikeUncheckedCreateWithoutUserInput> | tLikeCreateWithoutUserInput[] | tLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: tLikeCreateOrConnectWithoutUserInput | tLikeCreateOrConnectWithoutUserInput[]
    upsert?: tLikeUpsertWithWhereUniqueWithoutUserInput | tLikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: tLikeCreateManyUserInputEnvelope
    set?: tLikeWhereUniqueInput | tLikeWhereUniqueInput[]
    disconnect?: tLikeWhereUniqueInput | tLikeWhereUniqueInput[]
    delete?: tLikeWhereUniqueInput | tLikeWhereUniqueInput[]
    connect?: tLikeWhereUniqueInput | tLikeWhereUniqueInput[]
    update?: tLikeUpdateWithWhereUniqueWithoutUserInput | tLikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: tLikeUpdateManyWithWhereWithoutUserInput | tLikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: tLikeScalarWhereInput | tLikeScalarWhereInput[]
  }

  export type mPostUncheckedUpdateManyWithoutMUserNestedInput = {
    create?: XOR<mPostCreateWithoutMUserInput, mPostUncheckedCreateWithoutMUserInput> | mPostCreateWithoutMUserInput[] | mPostUncheckedCreateWithoutMUserInput[]
    connectOrCreate?: mPostCreateOrConnectWithoutMUserInput | mPostCreateOrConnectWithoutMUserInput[]
    upsert?: mPostUpsertWithWhereUniqueWithoutMUserInput | mPostUpsertWithWhereUniqueWithoutMUserInput[]
    createMany?: mPostCreateManyMUserInputEnvelope
    set?: mPostWhereUniqueInput | mPostWhereUniqueInput[]
    disconnect?: mPostWhereUniqueInput | mPostWhereUniqueInput[]
    delete?: mPostWhereUniqueInput | mPostWhereUniqueInput[]
    connect?: mPostWhereUniqueInput | mPostWhereUniqueInput[]
    update?: mPostUpdateWithWhereUniqueWithoutMUserInput | mPostUpdateWithWhereUniqueWithoutMUserInput[]
    updateMany?: mPostUpdateManyWithWhereWithoutMUserInput | mPostUpdateManyWithWhereWithoutMUserInput[]
    deleteMany?: mPostScalarWhereInput | mPostScalarWhereInput[]
  }

  export type tLikeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<tLikeCreateWithoutUserInput, tLikeUncheckedCreateWithoutUserInput> | tLikeCreateWithoutUserInput[] | tLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: tLikeCreateOrConnectWithoutUserInput | tLikeCreateOrConnectWithoutUserInput[]
    upsert?: tLikeUpsertWithWhereUniqueWithoutUserInput | tLikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: tLikeCreateManyUserInputEnvelope
    set?: tLikeWhereUniqueInput | tLikeWhereUniqueInput[]
    disconnect?: tLikeWhereUniqueInput | tLikeWhereUniqueInput[]
    delete?: tLikeWhereUniqueInput | tLikeWhereUniqueInput[]
    connect?: tLikeWhereUniqueInput | tLikeWhereUniqueInput[]
    update?: tLikeUpdateWithWhereUniqueWithoutUserInput | tLikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: tLikeUpdateManyWithWhereWithoutUserInput | tLikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: tLikeScalarWhereInput | tLikeScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type mUserCreateWithoutLikesInput = {
    id?: string
    username: string
    password: string
    email: string
    display_name: string
    num_follower?: number
    folower_id: JsonNullValueInput | InputJsonValue
    num_following?: number
    follwing_id: JsonNullValueInput | InputJsonValue
    user_post?: mPostCreateNestedManyWithoutMUserInput
  }

  export type mUserUncheckedCreateWithoutLikesInput = {
    id?: string
    username: string
    password: string
    email: string
    display_name: string
    num_follower?: number
    folower_id: JsonNullValueInput | InputJsonValue
    num_following?: number
    follwing_id: JsonNullValueInput | InputJsonValue
    user_post?: mPostUncheckedCreateNestedManyWithoutMUserInput
  }

  export type mUserCreateOrConnectWithoutLikesInput = {
    where: mUserWhereUniqueInput
    create: XOR<mUserCreateWithoutLikesInput, mUserUncheckedCreateWithoutLikesInput>
  }

  export type mPostCreateWithoutLikesInput = {
    url: string
    title?: string | null
    post_ower: string
    like_num?: number
    mUser: mUserCreateNestedOneWithoutUser_postInput
  }

  export type mPostUncheckedCreateWithoutLikesInput = {
    id?: number
    url: string
    title?: string | null
    post_ower: string
    like_num?: number
    post_owner: string
  }

  export type mPostCreateOrConnectWithoutLikesInput = {
    where: mPostWhereUniqueInput
    create: XOR<mPostCreateWithoutLikesInput, mPostUncheckedCreateWithoutLikesInput>
  }

  export type mUserUpsertWithoutLikesInput = {
    update: XOR<mUserUpdateWithoutLikesInput, mUserUncheckedUpdateWithoutLikesInput>
    create: XOR<mUserCreateWithoutLikesInput, mUserUncheckedCreateWithoutLikesInput>
    where?: mUserWhereInput
  }

  export type mUserUpdateToOneWithWhereWithoutLikesInput = {
    where?: mUserWhereInput
    data: XOR<mUserUpdateWithoutLikesInput, mUserUncheckedUpdateWithoutLikesInput>
  }

  export type mUserUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    num_follower?: IntFieldUpdateOperationsInput | number
    folower_id?: JsonNullValueInput | InputJsonValue
    num_following?: IntFieldUpdateOperationsInput | number
    follwing_id?: JsonNullValueInput | InputJsonValue
    user_post?: mPostUpdateManyWithoutMUserNestedInput
  }

  export type mUserUncheckedUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    num_follower?: IntFieldUpdateOperationsInput | number
    folower_id?: JsonNullValueInput | InputJsonValue
    num_following?: IntFieldUpdateOperationsInput | number
    follwing_id?: JsonNullValueInput | InputJsonValue
    user_post?: mPostUncheckedUpdateManyWithoutMUserNestedInput
  }

  export type mPostUpsertWithoutLikesInput = {
    update: XOR<mPostUpdateWithoutLikesInput, mPostUncheckedUpdateWithoutLikesInput>
    create: XOR<mPostCreateWithoutLikesInput, mPostUncheckedCreateWithoutLikesInput>
    where?: mPostWhereInput
  }

  export type mPostUpdateToOneWithWhereWithoutLikesInput = {
    where?: mPostWhereInput
    data: XOR<mPostUpdateWithoutLikesInput, mPostUncheckedUpdateWithoutLikesInput>
  }

  export type mPostUpdateWithoutLikesInput = {
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    post_ower?: StringFieldUpdateOperationsInput | string
    like_num?: IntFieldUpdateOperationsInput | number
    mUser?: mUserUpdateOneRequiredWithoutUser_postNestedInput
  }

  export type mPostUncheckedUpdateWithoutLikesInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    post_ower?: StringFieldUpdateOperationsInput | string
    like_num?: IntFieldUpdateOperationsInput | number
    post_owner?: StringFieldUpdateOperationsInput | string
  }

  export type mUserCreateWithoutUser_postInput = {
    id?: string
    username: string
    password: string
    email: string
    display_name: string
    num_follower?: number
    folower_id: JsonNullValueInput | InputJsonValue
    num_following?: number
    follwing_id: JsonNullValueInput | InputJsonValue
    likes?: tLikeCreateNestedManyWithoutUserInput
  }

  export type mUserUncheckedCreateWithoutUser_postInput = {
    id?: string
    username: string
    password: string
    email: string
    display_name: string
    num_follower?: number
    folower_id: JsonNullValueInput | InputJsonValue
    num_following?: number
    follwing_id: JsonNullValueInput | InputJsonValue
    likes?: tLikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type mUserCreateOrConnectWithoutUser_postInput = {
    where: mUserWhereUniqueInput
    create: XOR<mUserCreateWithoutUser_postInput, mUserUncheckedCreateWithoutUser_postInput>
  }

  export type tLikeCreateWithoutPostInput = {
    user: mUserCreateNestedOneWithoutLikesInput
  }

  export type tLikeUncheckedCreateWithoutPostInput = {
    id?: number
    user_id: string
  }

  export type tLikeCreateOrConnectWithoutPostInput = {
    where: tLikeWhereUniqueInput
    create: XOR<tLikeCreateWithoutPostInput, tLikeUncheckedCreateWithoutPostInput>
  }

  export type tLikeCreateManyPostInputEnvelope = {
    data: tLikeCreateManyPostInput | tLikeCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type mUserUpsertWithoutUser_postInput = {
    update: XOR<mUserUpdateWithoutUser_postInput, mUserUncheckedUpdateWithoutUser_postInput>
    create: XOR<mUserCreateWithoutUser_postInput, mUserUncheckedCreateWithoutUser_postInput>
    where?: mUserWhereInput
  }

  export type mUserUpdateToOneWithWhereWithoutUser_postInput = {
    where?: mUserWhereInput
    data: XOR<mUserUpdateWithoutUser_postInput, mUserUncheckedUpdateWithoutUser_postInput>
  }

  export type mUserUpdateWithoutUser_postInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    num_follower?: IntFieldUpdateOperationsInput | number
    folower_id?: JsonNullValueInput | InputJsonValue
    num_following?: IntFieldUpdateOperationsInput | number
    follwing_id?: JsonNullValueInput | InputJsonValue
    likes?: tLikeUpdateManyWithoutUserNestedInput
  }

  export type mUserUncheckedUpdateWithoutUser_postInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    num_follower?: IntFieldUpdateOperationsInput | number
    folower_id?: JsonNullValueInput | InputJsonValue
    num_following?: IntFieldUpdateOperationsInput | number
    follwing_id?: JsonNullValueInput | InputJsonValue
    likes?: tLikeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type tLikeUpsertWithWhereUniqueWithoutPostInput = {
    where: tLikeWhereUniqueInput
    update: XOR<tLikeUpdateWithoutPostInput, tLikeUncheckedUpdateWithoutPostInput>
    create: XOR<tLikeCreateWithoutPostInput, tLikeUncheckedCreateWithoutPostInput>
  }

  export type tLikeUpdateWithWhereUniqueWithoutPostInput = {
    where: tLikeWhereUniqueInput
    data: XOR<tLikeUpdateWithoutPostInput, tLikeUncheckedUpdateWithoutPostInput>
  }

  export type tLikeUpdateManyWithWhereWithoutPostInput = {
    where: tLikeScalarWhereInput
    data: XOR<tLikeUpdateManyMutationInput, tLikeUncheckedUpdateManyWithoutPostInput>
  }

  export type tLikeScalarWhereInput = {
    AND?: tLikeScalarWhereInput | tLikeScalarWhereInput[]
    OR?: tLikeScalarWhereInput[]
    NOT?: tLikeScalarWhereInput | tLikeScalarWhereInput[]
    id?: IntFilter<"tLike"> | number
    user_id?: StringFilter<"tLike"> | string
    post_id?: IntFilter<"tLike"> | number
  }

  export type mPostCreateWithoutMUserInput = {
    url: string
    title?: string | null
    post_ower: string
    like_num?: number
    likes?: tLikeCreateNestedManyWithoutPostInput
  }

  export type mPostUncheckedCreateWithoutMUserInput = {
    id?: number
    url: string
    title?: string | null
    post_ower: string
    like_num?: number
    likes?: tLikeUncheckedCreateNestedManyWithoutPostInput
  }

  export type mPostCreateOrConnectWithoutMUserInput = {
    where: mPostWhereUniqueInput
    create: XOR<mPostCreateWithoutMUserInput, mPostUncheckedCreateWithoutMUserInput>
  }

  export type mPostCreateManyMUserInputEnvelope = {
    data: mPostCreateManyMUserInput | mPostCreateManyMUserInput[]
    skipDuplicates?: boolean
  }

  export type tLikeCreateWithoutUserInput = {
    post: mPostCreateNestedOneWithoutLikesInput
  }

  export type tLikeUncheckedCreateWithoutUserInput = {
    id?: number
    post_id: number
  }

  export type tLikeCreateOrConnectWithoutUserInput = {
    where: tLikeWhereUniqueInput
    create: XOR<tLikeCreateWithoutUserInput, tLikeUncheckedCreateWithoutUserInput>
  }

  export type tLikeCreateManyUserInputEnvelope = {
    data: tLikeCreateManyUserInput | tLikeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type mPostUpsertWithWhereUniqueWithoutMUserInput = {
    where: mPostWhereUniqueInput
    update: XOR<mPostUpdateWithoutMUserInput, mPostUncheckedUpdateWithoutMUserInput>
    create: XOR<mPostCreateWithoutMUserInput, mPostUncheckedCreateWithoutMUserInput>
  }

  export type mPostUpdateWithWhereUniqueWithoutMUserInput = {
    where: mPostWhereUniqueInput
    data: XOR<mPostUpdateWithoutMUserInput, mPostUncheckedUpdateWithoutMUserInput>
  }

  export type mPostUpdateManyWithWhereWithoutMUserInput = {
    where: mPostScalarWhereInput
    data: XOR<mPostUpdateManyMutationInput, mPostUncheckedUpdateManyWithoutMUserInput>
  }

  export type mPostScalarWhereInput = {
    AND?: mPostScalarWhereInput | mPostScalarWhereInput[]
    OR?: mPostScalarWhereInput[]
    NOT?: mPostScalarWhereInput | mPostScalarWhereInput[]
    id?: IntFilter<"mPost"> | number
    url?: StringFilter<"mPost"> | string
    title?: StringNullableFilter<"mPost"> | string | null
    post_ower?: StringFilter<"mPost"> | string
    like_num?: IntFilter<"mPost"> | number
    post_owner?: StringFilter<"mPost"> | string
  }

  export type tLikeUpsertWithWhereUniqueWithoutUserInput = {
    where: tLikeWhereUniqueInput
    update: XOR<tLikeUpdateWithoutUserInput, tLikeUncheckedUpdateWithoutUserInput>
    create: XOR<tLikeCreateWithoutUserInput, tLikeUncheckedCreateWithoutUserInput>
  }

  export type tLikeUpdateWithWhereUniqueWithoutUserInput = {
    where: tLikeWhereUniqueInput
    data: XOR<tLikeUpdateWithoutUserInput, tLikeUncheckedUpdateWithoutUserInput>
  }

  export type tLikeUpdateManyWithWhereWithoutUserInput = {
    where: tLikeScalarWhereInput
    data: XOR<tLikeUpdateManyMutationInput, tLikeUncheckedUpdateManyWithoutUserInput>
  }

  export type tLikeCreateManyPostInput = {
    id?: number
    user_id: string
  }

  export type tLikeUpdateWithoutPostInput = {
    user?: mUserUpdateOneRequiredWithoutLikesNestedInput
  }

  export type tLikeUncheckedUpdateWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type tLikeUncheckedUpdateManyWithoutPostInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type mPostCreateManyMUserInput = {
    id?: number
    url: string
    title?: string | null
    post_ower: string
    like_num?: number
  }

  export type tLikeCreateManyUserInput = {
    id?: number
    post_id: number
  }

  export type mPostUpdateWithoutMUserInput = {
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    post_ower?: StringFieldUpdateOperationsInput | string
    like_num?: IntFieldUpdateOperationsInput | number
    likes?: tLikeUpdateManyWithoutPostNestedInput
  }

  export type mPostUncheckedUpdateWithoutMUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    post_ower?: StringFieldUpdateOperationsInput | string
    like_num?: IntFieldUpdateOperationsInput | number
    likes?: tLikeUncheckedUpdateManyWithoutPostNestedInput
  }

  export type mPostUncheckedUpdateManyWithoutMUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    post_ower?: StringFieldUpdateOperationsInput | string
    like_num?: IntFieldUpdateOperationsInput | number
  }

  export type tLikeUpdateWithoutUserInput = {
    post?: mPostUpdateOneRequiredWithoutLikesNestedInput
  }

  export type tLikeUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    post_id?: IntFieldUpdateOperationsInput | number
  }

  export type tLikeUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    post_id?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}