import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  numeric: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "category" */
export type Category = {
  __typename?: 'category';
  id: Scalars['uuid'];
  name: Scalars['String'];
  /** An array relationship */
  products: Array<Product>;
  /** An aggregate relationship */
  products_aggregate: Product_Aggregate;
  slug: Scalars['String'];
};


/** columns and relationships of "category" */
export type CategoryProductsArgs = {
  distinct_on?: InputMaybe<Array<Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Product_Order_By>>;
  where?: InputMaybe<Product_Bool_Exp>;
};


/** columns and relationships of "category" */
export type CategoryProducts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Product_Order_By>>;
  where?: InputMaybe<Product_Bool_Exp>;
};

/** aggregated selection of "category" */
export type Category_Aggregate = {
  __typename?: 'category_aggregate';
  aggregate?: Maybe<Category_Aggregate_Fields>;
  nodes: Array<Category>;
};

/** aggregate fields of "category" */
export type Category_Aggregate_Fields = {
  __typename?: 'category_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Category_Max_Fields>;
  min?: Maybe<Category_Min_Fields>;
};


/** aggregate fields of "category" */
export type Category_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Category_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "category". All fields are combined with a logical 'AND'. */
export type Category_Bool_Exp = {
  _and?: InputMaybe<Array<Category_Bool_Exp>>;
  _not?: InputMaybe<Category_Bool_Exp>;
  _or?: InputMaybe<Array<Category_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  products?: InputMaybe<Product_Bool_Exp>;
  slug?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "category" */
export enum Category_Constraint {
  /** unique or primary key constraint */
  CategoryPkey = 'category_pkey'
}

/** input type for inserting data into table "category" */
export type Category_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  products?: InputMaybe<Product_Arr_Rel_Insert_Input>;
  slug?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Category_Max_Fields = {
  __typename?: 'category_max_fields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Category_Min_Fields = {
  __typename?: 'category_min_fields';
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "category" */
export type Category_Mutation_Response = {
  __typename?: 'category_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Category>;
};

/** input type for inserting object relation for remote table "category" */
export type Category_Obj_Rel_Insert_Input = {
  data: Category_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Category_On_Conflict>;
};

/** on conflict condition type for table "category" */
export type Category_On_Conflict = {
  constraint: Category_Constraint;
  update_columns?: Array<Category_Update_Column>;
  where?: InputMaybe<Category_Bool_Exp>;
};

/** Ordering options when selecting data from "category". */
export type Category_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  products_aggregate?: InputMaybe<Product_Aggregate_Order_By>;
  slug?: InputMaybe<Order_By>;
};

/** primary key columns input for table: category */
export type Category_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "category" */
export enum Category_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Slug = 'slug'
}

/** input type for updating data in table "category" */
export type Category_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
};

/** update columns of table "category" */
export enum Category_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Slug = 'slug'
}

/** columns and relationships of "image" */
export type Image = {
  __typename?: 'image';
  alt: Scalars['String'];
  height: Scalars['Int'];
  id: Scalars['uuid'];
  /** An array relationship */
  products: Array<Product>;
  /** An aggregate relationship */
  products_aggregate: Product_Aggregate;
  size: Scalars['numeric'];
  src: Scalars['String'];
  width: Scalars['Int'];
};


/** columns and relationships of "image" */
export type ImageProductsArgs = {
  distinct_on?: InputMaybe<Array<Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Product_Order_By>>;
  where?: InputMaybe<Product_Bool_Exp>;
};


/** columns and relationships of "image" */
export type ImageProducts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Product_Order_By>>;
  where?: InputMaybe<Product_Bool_Exp>;
};

/** aggregated selection of "image" */
export type Image_Aggregate = {
  __typename?: 'image_aggregate';
  aggregate?: Maybe<Image_Aggregate_Fields>;
  nodes: Array<Image>;
};

/** aggregate fields of "image" */
export type Image_Aggregate_Fields = {
  __typename?: 'image_aggregate_fields';
  avg?: Maybe<Image_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Image_Max_Fields>;
  min?: Maybe<Image_Min_Fields>;
  stddev?: Maybe<Image_Stddev_Fields>;
  stddev_pop?: Maybe<Image_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Image_Stddev_Samp_Fields>;
  sum?: Maybe<Image_Sum_Fields>;
  var_pop?: Maybe<Image_Var_Pop_Fields>;
  var_samp?: Maybe<Image_Var_Samp_Fields>;
  variance?: Maybe<Image_Variance_Fields>;
};


/** aggregate fields of "image" */
export type Image_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Image_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Image_Avg_Fields = {
  __typename?: 'image_avg_fields';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "image". All fields are combined with a logical 'AND'. */
export type Image_Bool_Exp = {
  _and?: InputMaybe<Array<Image_Bool_Exp>>;
  _not?: InputMaybe<Image_Bool_Exp>;
  _or?: InputMaybe<Array<Image_Bool_Exp>>;
  alt?: InputMaybe<String_Comparison_Exp>;
  height?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  products?: InputMaybe<Product_Bool_Exp>;
  size?: InputMaybe<Numeric_Comparison_Exp>;
  src?: InputMaybe<String_Comparison_Exp>;
  width?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "image" */
export enum Image_Constraint {
  /** unique or primary key constraint */
  ImagePkey = 'image_pkey'
}

/** input type for incrementing numeric columns in table "image" */
export type Image_Inc_Input = {
  height?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['numeric']>;
  width?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "image" */
export type Image_Insert_Input = {
  alt?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['uuid']>;
  products?: InputMaybe<Product_Arr_Rel_Insert_Input>;
  size?: InputMaybe<Scalars['numeric']>;
  src?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Image_Max_Fields = {
  __typename?: 'image_max_fields';
  alt?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  size?: Maybe<Scalars['numeric']>;
  src?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Image_Min_Fields = {
  __typename?: 'image_min_fields';
  alt?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  size?: Maybe<Scalars['numeric']>;
  src?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "image" */
export type Image_Mutation_Response = {
  __typename?: 'image_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Image>;
};

/** input type for inserting object relation for remote table "image" */
export type Image_Obj_Rel_Insert_Input = {
  data: Image_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Image_On_Conflict>;
};

/** on conflict condition type for table "image" */
export type Image_On_Conflict = {
  constraint: Image_Constraint;
  update_columns?: Array<Image_Update_Column>;
  where?: InputMaybe<Image_Bool_Exp>;
};

/** Ordering options when selecting data from "image". */
export type Image_Order_By = {
  alt?: InputMaybe<Order_By>;
  height?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  products_aggregate?: InputMaybe<Product_Aggregate_Order_By>;
  size?: InputMaybe<Order_By>;
  src?: InputMaybe<Order_By>;
  width?: InputMaybe<Order_By>;
};

/** primary key columns input for table: image */
export type Image_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "image" */
export enum Image_Select_Column {
  /** column name */
  Alt = 'alt',
  /** column name */
  Height = 'height',
  /** column name */
  Id = 'id',
  /** column name */
  Size = 'size',
  /** column name */
  Src = 'src',
  /** column name */
  Width = 'width'
}

/** input type for updating data in table "image" */
export type Image_Set_Input = {
  alt?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['uuid']>;
  size?: InputMaybe<Scalars['numeric']>;
  src?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Image_Stddev_Fields = {
  __typename?: 'image_stddev_fields';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Image_Stddev_Pop_Fields = {
  __typename?: 'image_stddev_pop_fields';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Image_Stddev_Samp_Fields = {
  __typename?: 'image_stddev_samp_fields';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Image_Sum_Fields = {
  __typename?: 'image_sum_fields';
  height?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['numeric']>;
  width?: Maybe<Scalars['Int']>;
};

/** update columns of table "image" */
export enum Image_Update_Column {
  /** column name */
  Alt = 'alt',
  /** column name */
  Height = 'height',
  /** column name */
  Id = 'id',
  /** column name */
  Size = 'size',
  /** column name */
  Src = 'src',
  /** column name */
  Width = 'width'
}

/** aggregate var_pop on columns */
export type Image_Var_Pop_Fields = {
  __typename?: 'image_var_pop_fields';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Image_Var_Samp_Fields = {
  __typename?: 'image_var_samp_fields';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Image_Variance_Fields = {
  __typename?: 'image_variance_fields';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "category" */
  delete_category?: Maybe<Category_Mutation_Response>;
  /** delete single row from the table: "category" */
  delete_category_by_pk?: Maybe<Category>;
  /** delete data from the table: "image" */
  delete_image?: Maybe<Image_Mutation_Response>;
  /** delete single row from the table: "image" */
  delete_image_by_pk?: Maybe<Image>;
  /** delete data from the table: "product" */
  delete_product?: Maybe<Product_Mutation_Response>;
  /** delete single row from the table: "product" */
  delete_product_by_pk?: Maybe<Product>;
  /** delete data from the table: "recommended" */
  delete_recommended?: Maybe<Recommended_Mutation_Response>;
  /** delete single row from the table: "recommended" */
  delete_recommended_by_pk?: Maybe<Recommended>;
  /** insert data into the table: "category" */
  insert_category?: Maybe<Category_Mutation_Response>;
  /** insert a single row into the table: "category" */
  insert_category_one?: Maybe<Category>;
  /** insert data into the table: "image" */
  insert_image?: Maybe<Image_Mutation_Response>;
  /** insert a single row into the table: "image" */
  insert_image_one?: Maybe<Image>;
  /** insert data into the table: "product" */
  insert_product?: Maybe<Product_Mutation_Response>;
  /** insert a single row into the table: "product" */
  insert_product_one?: Maybe<Product>;
  /** insert data into the table: "recommended" */
  insert_recommended?: Maybe<Recommended_Mutation_Response>;
  /** insert a single row into the table: "recommended" */
  insert_recommended_one?: Maybe<Recommended>;
  /** update data of the table: "category" */
  update_category?: Maybe<Category_Mutation_Response>;
  /** update single row of the table: "category" */
  update_category_by_pk?: Maybe<Category>;
  /** update data of the table: "image" */
  update_image?: Maybe<Image_Mutation_Response>;
  /** update single row of the table: "image" */
  update_image_by_pk?: Maybe<Image>;
  /** update data of the table: "product" */
  update_product?: Maybe<Product_Mutation_Response>;
  /** update single row of the table: "product" */
  update_product_by_pk?: Maybe<Product>;
  /** update data of the table: "recommended" */
  update_recommended?: Maybe<Recommended_Mutation_Response>;
  /** update single row of the table: "recommended" */
  update_recommended_by_pk?: Maybe<Recommended>;
};


/** mutation root */
export type Mutation_RootDelete_CategoryArgs = {
  where: Category_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Category_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_ImageArgs = {
  where: Image_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Image_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_ProductArgs = {
  where: Product_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Product_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_RecommendedArgs = {
  where: Recommended_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Recommended_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_CategoryArgs = {
  objects: Array<Category_Insert_Input>;
  on_conflict?: InputMaybe<Category_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Category_OneArgs = {
  object: Category_Insert_Input;
  on_conflict?: InputMaybe<Category_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ImageArgs = {
  objects: Array<Image_Insert_Input>;
  on_conflict?: InputMaybe<Image_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Image_OneArgs = {
  object: Image_Insert_Input;
  on_conflict?: InputMaybe<Image_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ProductArgs = {
  objects: Array<Product_Insert_Input>;
  on_conflict?: InputMaybe<Product_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Product_OneArgs = {
  object: Product_Insert_Input;
  on_conflict?: InputMaybe<Product_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RecommendedArgs = {
  objects: Array<Recommended_Insert_Input>;
  on_conflict?: InputMaybe<Recommended_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Recommended_OneArgs = {
  object: Recommended_Insert_Input;
  on_conflict?: InputMaybe<Recommended_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_CategoryArgs = {
  _set?: InputMaybe<Category_Set_Input>;
  where: Category_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Category_By_PkArgs = {
  _set?: InputMaybe<Category_Set_Input>;
  pk_columns: Category_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ImageArgs = {
  _inc?: InputMaybe<Image_Inc_Input>;
  _set?: InputMaybe<Image_Set_Input>;
  where: Image_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Image_By_PkArgs = {
  _inc?: InputMaybe<Image_Inc_Input>;
  _set?: InputMaybe<Image_Set_Input>;
  pk_columns: Image_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ProductArgs = {
  _inc?: InputMaybe<Product_Inc_Input>;
  _set?: InputMaybe<Product_Set_Input>;
  where: Product_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Product_By_PkArgs = {
  _inc?: InputMaybe<Product_Inc_Input>;
  _set?: InputMaybe<Product_Set_Input>;
  pk_columns: Product_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_RecommendedArgs = {
  _set?: InputMaybe<Recommended_Set_Input>;
  where: Recommended_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Recommended_By_PkArgs = {
  _set?: InputMaybe<Recommended_Set_Input>;
  pk_columns: Recommended_Pk_Columns_Input;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']>;
  _gt?: InputMaybe<Scalars['numeric']>;
  _gte?: InputMaybe<Scalars['numeric']>;
  _in?: InputMaybe<Array<Scalars['numeric']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['numeric']>;
  _lte?: InputMaybe<Scalars['numeric']>;
  _neq?: InputMaybe<Scalars['numeric']>;
  _nin?: InputMaybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "product" */
export type Product = {
  __typename?: 'product';
  bestseller: Scalars['Boolean'];
  /** An object relationship */
  category: Category;
  category_id: Scalars['uuid'];
  currency: Scalars['String'];
  description: Scalars['String'];
  featured: Scalars['Boolean'];
  id: Scalars['uuid'];
  /** An object relationship */
  image: Image;
  image_id: Scalars['uuid'];
  name: Scalars['String'];
  price: Scalars['numeric'];
  recommended?: Maybe<Scalars['uuid']>;
  /** An array relationship */
  recommendeds: Array<Recommended>;
  /** An array relationship */
  recommendedsByRecommendedProductId: Array<Recommended>;
  /** An aggregate relationship */
  recommendedsByRecommendedProductId_aggregate: Recommended_Aggregate;
  /** An aggregate relationship */
  recommendeds_aggregate: Recommended_Aggregate;
};


/** columns and relationships of "product" */
export type ProductRecommendedsArgs = {
  distinct_on?: InputMaybe<Array<Recommended_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Recommended_Order_By>>;
  where?: InputMaybe<Recommended_Bool_Exp>;
};


/** columns and relationships of "product" */
export type ProductRecommendedsByRecommendedProductIdArgs = {
  distinct_on?: InputMaybe<Array<Recommended_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Recommended_Order_By>>;
  where?: InputMaybe<Recommended_Bool_Exp>;
};


/** columns and relationships of "product" */
export type ProductRecommendedsByRecommendedProductId_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Recommended_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Recommended_Order_By>>;
  where?: InputMaybe<Recommended_Bool_Exp>;
};


/** columns and relationships of "product" */
export type ProductRecommendeds_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Recommended_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Recommended_Order_By>>;
  where?: InputMaybe<Recommended_Bool_Exp>;
};

/** aggregated selection of "product" */
export type Product_Aggregate = {
  __typename?: 'product_aggregate';
  aggregate?: Maybe<Product_Aggregate_Fields>;
  nodes: Array<Product>;
};

/** aggregate fields of "product" */
export type Product_Aggregate_Fields = {
  __typename?: 'product_aggregate_fields';
  avg?: Maybe<Product_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Product_Max_Fields>;
  min?: Maybe<Product_Min_Fields>;
  stddev?: Maybe<Product_Stddev_Fields>;
  stddev_pop?: Maybe<Product_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Product_Stddev_Samp_Fields>;
  sum?: Maybe<Product_Sum_Fields>;
  var_pop?: Maybe<Product_Var_Pop_Fields>;
  var_samp?: Maybe<Product_Var_Samp_Fields>;
  variance?: Maybe<Product_Variance_Fields>;
};


/** aggregate fields of "product" */
export type Product_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Product_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "product" */
export type Product_Aggregate_Order_By = {
  avg?: InputMaybe<Product_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Product_Max_Order_By>;
  min?: InputMaybe<Product_Min_Order_By>;
  stddev?: InputMaybe<Product_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Product_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Product_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Product_Sum_Order_By>;
  var_pop?: InputMaybe<Product_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Product_Var_Samp_Order_By>;
  variance?: InputMaybe<Product_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "product" */
export type Product_Arr_Rel_Insert_Input = {
  data: Array<Product_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Product_On_Conflict>;
};

/** aggregate avg on columns */
export type Product_Avg_Fields = {
  __typename?: 'product_avg_fields';
  price?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "product" */
export type Product_Avg_Order_By = {
  price?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "product". All fields are combined with a logical 'AND'. */
export type Product_Bool_Exp = {
  _and?: InputMaybe<Array<Product_Bool_Exp>>;
  _not?: InputMaybe<Product_Bool_Exp>;
  _or?: InputMaybe<Array<Product_Bool_Exp>>;
  bestseller?: InputMaybe<Boolean_Comparison_Exp>;
  category?: InputMaybe<Category_Bool_Exp>;
  category_id?: InputMaybe<Uuid_Comparison_Exp>;
  currency?: InputMaybe<String_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  featured?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  image?: InputMaybe<Image_Bool_Exp>;
  image_id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  price?: InputMaybe<Numeric_Comparison_Exp>;
  recommended?: InputMaybe<Uuid_Comparison_Exp>;
  recommendeds?: InputMaybe<Recommended_Bool_Exp>;
  recommendedsByRecommendedProductId?: InputMaybe<Recommended_Bool_Exp>;
};

/** unique or primary key constraints on table "product" */
export enum Product_Constraint {
  /** unique or primary key constraint */
  ProductPkey = 'product_pkey'
}

/** input type for incrementing numeric columns in table "product" */
export type Product_Inc_Input = {
  price?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "product" */
export type Product_Insert_Input = {
  bestseller?: InputMaybe<Scalars['Boolean']>;
  category?: InputMaybe<Category_Obj_Rel_Insert_Input>;
  category_id?: InputMaybe<Scalars['uuid']>;
  currency?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  featured?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  image?: InputMaybe<Image_Obj_Rel_Insert_Input>;
  image_id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['numeric']>;
  recommended?: InputMaybe<Scalars['uuid']>;
  recommendeds?: InputMaybe<Recommended_Arr_Rel_Insert_Input>;
  recommendedsByRecommendedProductId?: InputMaybe<Recommended_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Product_Max_Fields = {
  __typename?: 'product_max_fields';
  category_id?: Maybe<Scalars['uuid']>;
  currency?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  image_id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['numeric']>;
  recommended?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "product" */
export type Product_Max_Order_By = {
  category_id?: InputMaybe<Order_By>;
  currency?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  recommended?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Product_Min_Fields = {
  __typename?: 'product_min_fields';
  category_id?: Maybe<Scalars['uuid']>;
  currency?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  image_id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['numeric']>;
  recommended?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "product" */
export type Product_Min_Order_By = {
  category_id?: InputMaybe<Order_By>;
  currency?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  recommended?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "product" */
export type Product_Mutation_Response = {
  __typename?: 'product_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Product>;
};

/** input type for inserting object relation for remote table "product" */
export type Product_Obj_Rel_Insert_Input = {
  data: Product_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Product_On_Conflict>;
};

/** on conflict condition type for table "product" */
export type Product_On_Conflict = {
  constraint: Product_Constraint;
  update_columns?: Array<Product_Update_Column>;
  where?: InputMaybe<Product_Bool_Exp>;
};

/** Ordering options when selecting data from "product". */
export type Product_Order_By = {
  bestseller?: InputMaybe<Order_By>;
  category?: InputMaybe<Category_Order_By>;
  category_id?: InputMaybe<Order_By>;
  currency?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  featured?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Image_Order_By>;
  image_id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  recommended?: InputMaybe<Order_By>;
  recommendedsByRecommendedProductId_aggregate?: InputMaybe<Recommended_Aggregate_Order_By>;
  recommendeds_aggregate?: InputMaybe<Recommended_Aggregate_Order_By>;
};

/** primary key columns input for table: product */
export type Product_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "product" */
export enum Product_Select_Column {
  /** column name */
  Bestseller = 'bestseller',
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  Currency = 'currency',
  /** column name */
  Description = 'description',
  /** column name */
  Featured = 'featured',
  /** column name */
  Id = 'id',
  /** column name */
  ImageId = 'image_id',
  /** column name */
  Name = 'name',
  /** column name */
  Price = 'price',
  /** column name */
  Recommended = 'recommended'
}

/** input type for updating data in table "product" */
export type Product_Set_Input = {
  bestseller?: InputMaybe<Scalars['Boolean']>;
  category_id?: InputMaybe<Scalars['uuid']>;
  currency?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  featured?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  image_id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['numeric']>;
  recommended?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Product_Stddev_Fields = {
  __typename?: 'product_stddev_fields';
  price?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "product" */
export type Product_Stddev_Order_By = {
  price?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Product_Stddev_Pop_Fields = {
  __typename?: 'product_stddev_pop_fields';
  price?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "product" */
export type Product_Stddev_Pop_Order_By = {
  price?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Product_Stddev_Samp_Fields = {
  __typename?: 'product_stddev_samp_fields';
  price?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "product" */
export type Product_Stddev_Samp_Order_By = {
  price?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Product_Sum_Fields = {
  __typename?: 'product_sum_fields';
  price?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "product" */
export type Product_Sum_Order_By = {
  price?: InputMaybe<Order_By>;
};

/** update columns of table "product" */
export enum Product_Update_Column {
  /** column name */
  Bestseller = 'bestseller',
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  Currency = 'currency',
  /** column name */
  Description = 'description',
  /** column name */
  Featured = 'featured',
  /** column name */
  Id = 'id',
  /** column name */
  ImageId = 'image_id',
  /** column name */
  Name = 'name',
  /** column name */
  Price = 'price',
  /** column name */
  Recommended = 'recommended'
}

/** aggregate var_pop on columns */
export type Product_Var_Pop_Fields = {
  __typename?: 'product_var_pop_fields';
  price?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "product" */
export type Product_Var_Pop_Order_By = {
  price?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Product_Var_Samp_Fields = {
  __typename?: 'product_var_samp_fields';
  price?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "product" */
export type Product_Var_Samp_Order_By = {
  price?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Product_Variance_Fields = {
  __typename?: 'product_variance_fields';
  price?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "product" */
export type Product_Variance_Order_By = {
  price?: InputMaybe<Order_By>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch aggregated fields from the table: "category" */
  categories: Category_Aggregate;
  /** fetch data from the table: "category" */
  category: Array<Category>;
  /** fetch data from the table: "category" using primary key columns */
  category_by_pk?: Maybe<Category>;
  /** fetch data from the table: "image" */
  image: Array<Image>;
  /** fetch data from the table: "image" using primary key columns */
  image_by_pk?: Maybe<Image>;
  /** fetch aggregated fields from the table: "image" */
  images: Image_Aggregate;
  /** fetch data from the table: "product" */
  product: Array<Product>;
  /** fetch data from the table: "product" using primary key columns */
  product_by_pk?: Maybe<Product>;
  /** fetch aggregated fields from the table: "product" */
  products: Product_Aggregate;
  /** fetch data from the table: "recommended" */
  recommended: Array<Recommended>;
  /** fetch aggregated fields from the table: "recommended" */
  recommended_aggregate: Recommended_Aggregate;
  /** fetch data from the table: "recommended" using primary key columns */
  recommended_by_pk?: Maybe<Recommended>;
  /** fetch data from the table: "recommended_products" */
  recommended_products: Array<Recommended_Products>;
  /** fetch aggregated fields from the table: "recommended_products" */
  recommended_products_aggregate: Recommended_Products_Aggregate;
};


export type Query_RootCategoriesArgs = {
  distinct_on?: InputMaybe<Array<Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Category_Order_By>>;
  where?: InputMaybe<Category_Bool_Exp>;
};


export type Query_RootCategoryArgs = {
  distinct_on?: InputMaybe<Array<Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Category_Order_By>>;
  where?: InputMaybe<Category_Bool_Exp>;
};


export type Query_RootCategory_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootImageArgs = {
  distinct_on?: InputMaybe<Array<Image_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Image_Order_By>>;
  where?: InputMaybe<Image_Bool_Exp>;
};


export type Query_RootImage_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootImagesArgs = {
  distinct_on?: InputMaybe<Array<Image_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Image_Order_By>>;
  where?: InputMaybe<Image_Bool_Exp>;
};


export type Query_RootProductArgs = {
  distinct_on?: InputMaybe<Array<Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Product_Order_By>>;
  where?: InputMaybe<Product_Bool_Exp>;
};


export type Query_RootProduct_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootProductsArgs = {
  distinct_on?: InputMaybe<Array<Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Product_Order_By>>;
  where?: InputMaybe<Product_Bool_Exp>;
};


export type Query_RootRecommendedArgs = {
  distinct_on?: InputMaybe<Array<Recommended_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Recommended_Order_By>>;
  where?: InputMaybe<Recommended_Bool_Exp>;
};


export type Query_RootRecommended_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Recommended_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Recommended_Order_By>>;
  where?: InputMaybe<Recommended_Bool_Exp>;
};


export type Query_RootRecommended_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootRecommended_ProductsArgs = {
  distinct_on?: InputMaybe<Array<Recommended_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Recommended_Products_Order_By>>;
  where?: InputMaybe<Recommended_Products_Bool_Exp>;
};


export type Query_RootRecommended_Products_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Recommended_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Recommended_Products_Order_By>>;
  where?: InputMaybe<Recommended_Products_Bool_Exp>;
};

/** columns and relationships of "recommended" */
export type Recommended = {
  __typename?: 'recommended';
  id: Scalars['uuid'];
  /** An object relationship */
  product: Product;
  /** An object relationship */
  productByRecommendedProductId: Product;
  product_id: Scalars['uuid'];
  recommended_product_id: Scalars['uuid'];
};

/** aggregated selection of "recommended" */
export type Recommended_Aggregate = {
  __typename?: 'recommended_aggregate';
  aggregate?: Maybe<Recommended_Aggregate_Fields>;
  nodes: Array<Recommended>;
};

/** aggregate fields of "recommended" */
export type Recommended_Aggregate_Fields = {
  __typename?: 'recommended_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Recommended_Max_Fields>;
  min?: Maybe<Recommended_Min_Fields>;
};


/** aggregate fields of "recommended" */
export type Recommended_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Recommended_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "recommended" */
export type Recommended_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Recommended_Max_Order_By>;
  min?: InputMaybe<Recommended_Min_Order_By>;
};

/** input type for inserting array relation for remote table "recommended" */
export type Recommended_Arr_Rel_Insert_Input = {
  data: Array<Recommended_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Recommended_On_Conflict>;
};

/** Boolean expression to filter rows from the table "recommended". All fields are combined with a logical 'AND'. */
export type Recommended_Bool_Exp = {
  _and?: InputMaybe<Array<Recommended_Bool_Exp>>;
  _not?: InputMaybe<Recommended_Bool_Exp>;
  _or?: InputMaybe<Array<Recommended_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  product?: InputMaybe<Product_Bool_Exp>;
  productByRecommendedProductId?: InputMaybe<Product_Bool_Exp>;
  product_id?: InputMaybe<Uuid_Comparison_Exp>;
  recommended_product_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "recommended" */
export enum Recommended_Constraint {
  /** unique or primary key constraint */
  RecommendedPkey = 'Recommended_pkey'
}

/** input type for inserting data into table "recommended" */
export type Recommended_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  product?: InputMaybe<Product_Obj_Rel_Insert_Input>;
  productByRecommendedProductId?: InputMaybe<Product_Obj_Rel_Insert_Input>;
  product_id?: InputMaybe<Scalars['uuid']>;
  recommended_product_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Recommended_Max_Fields = {
  __typename?: 'recommended_max_fields';
  id?: Maybe<Scalars['uuid']>;
  product_id?: Maybe<Scalars['uuid']>;
  recommended_product_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "recommended" */
export type Recommended_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
  recommended_product_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Recommended_Min_Fields = {
  __typename?: 'recommended_min_fields';
  id?: Maybe<Scalars['uuid']>;
  product_id?: Maybe<Scalars['uuid']>;
  recommended_product_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "recommended" */
export type Recommended_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
  recommended_product_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "recommended" */
export type Recommended_Mutation_Response = {
  __typename?: 'recommended_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Recommended>;
};

/** on conflict condition type for table "recommended" */
export type Recommended_On_Conflict = {
  constraint: Recommended_Constraint;
  update_columns?: Array<Recommended_Update_Column>;
  where?: InputMaybe<Recommended_Bool_Exp>;
};

/** Ordering options when selecting data from "recommended". */
export type Recommended_Order_By = {
  id?: InputMaybe<Order_By>;
  product?: InputMaybe<Product_Order_By>;
  productByRecommendedProductId?: InputMaybe<Product_Order_By>;
  product_id?: InputMaybe<Order_By>;
  recommended_product_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: recommended */
export type Recommended_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** columns and relationships of "recommended_products" */
export type Recommended_Products = {
  __typename?: 'recommended_products';
  name?: Maybe<Scalars['String']>;
  recommended_product_id?: Maybe<Scalars['uuid']>;
};

/** aggregated selection of "recommended_products" */
export type Recommended_Products_Aggregate = {
  __typename?: 'recommended_products_aggregate';
  aggregate?: Maybe<Recommended_Products_Aggregate_Fields>;
  nodes: Array<Recommended_Products>;
};

/** aggregate fields of "recommended_products" */
export type Recommended_Products_Aggregate_Fields = {
  __typename?: 'recommended_products_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Recommended_Products_Max_Fields>;
  min?: Maybe<Recommended_Products_Min_Fields>;
};


/** aggregate fields of "recommended_products" */
export type Recommended_Products_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Recommended_Products_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "recommended_products". All fields are combined with a logical 'AND'. */
export type Recommended_Products_Bool_Exp = {
  _and?: InputMaybe<Array<Recommended_Products_Bool_Exp>>;
  _not?: InputMaybe<Recommended_Products_Bool_Exp>;
  _or?: InputMaybe<Array<Recommended_Products_Bool_Exp>>;
  name?: InputMaybe<String_Comparison_Exp>;
  recommended_product_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** aggregate max on columns */
export type Recommended_Products_Max_Fields = {
  __typename?: 'recommended_products_max_fields';
  name?: Maybe<Scalars['String']>;
  recommended_product_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Recommended_Products_Min_Fields = {
  __typename?: 'recommended_products_min_fields';
  name?: Maybe<Scalars['String']>;
  recommended_product_id?: Maybe<Scalars['uuid']>;
};

/** Ordering options when selecting data from "recommended_products". */
export type Recommended_Products_Order_By = {
  name?: InputMaybe<Order_By>;
  recommended_product_id?: InputMaybe<Order_By>;
};

/** select columns of table "recommended_products" */
export enum Recommended_Products_Select_Column {
  /** column name */
  Name = 'name',
  /** column name */
  RecommendedProductId = 'recommended_product_id'
}

/** select columns of table "recommended" */
export enum Recommended_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  RecommendedProductId = 'recommended_product_id'
}

/** input type for updating data in table "recommended" */
export type Recommended_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  product_id?: InputMaybe<Scalars['uuid']>;
  recommended_product_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "recommended" */
export enum Recommended_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  RecommendedProductId = 'recommended_product_id'
}

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch aggregated fields from the table: "category" */
  categories: Category_Aggregate;
  /** fetch data from the table: "category" */
  category: Array<Category>;
  /** fetch data from the table: "category" using primary key columns */
  category_by_pk?: Maybe<Category>;
  /** fetch data from the table: "image" */
  image: Array<Image>;
  /** fetch data from the table: "image" using primary key columns */
  image_by_pk?: Maybe<Image>;
  /** fetch aggregated fields from the table: "image" */
  images: Image_Aggregate;
  /** fetch data from the table: "product" */
  product: Array<Product>;
  /** fetch data from the table: "product" using primary key columns */
  product_by_pk?: Maybe<Product>;
  /** fetch aggregated fields from the table: "product" */
  products: Product_Aggregate;
  /** fetch data from the table: "recommended" */
  recommended: Array<Recommended>;
  /** fetch aggregated fields from the table: "recommended" */
  recommended_aggregate: Recommended_Aggregate;
  /** fetch data from the table: "recommended" using primary key columns */
  recommended_by_pk?: Maybe<Recommended>;
  /** fetch data from the table: "recommended_products" */
  recommended_products: Array<Recommended_Products>;
  /** fetch aggregated fields from the table: "recommended_products" */
  recommended_products_aggregate: Recommended_Products_Aggregate;
};


export type Subscription_RootCategoriesArgs = {
  distinct_on?: InputMaybe<Array<Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Category_Order_By>>;
  where?: InputMaybe<Category_Bool_Exp>;
};


export type Subscription_RootCategoryArgs = {
  distinct_on?: InputMaybe<Array<Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Category_Order_By>>;
  where?: InputMaybe<Category_Bool_Exp>;
};


export type Subscription_RootCategory_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootImageArgs = {
  distinct_on?: InputMaybe<Array<Image_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Image_Order_By>>;
  where?: InputMaybe<Image_Bool_Exp>;
};


export type Subscription_RootImage_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootImagesArgs = {
  distinct_on?: InputMaybe<Array<Image_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Image_Order_By>>;
  where?: InputMaybe<Image_Bool_Exp>;
};


export type Subscription_RootProductArgs = {
  distinct_on?: InputMaybe<Array<Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Product_Order_By>>;
  where?: InputMaybe<Product_Bool_Exp>;
};


export type Subscription_RootProduct_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootProductsArgs = {
  distinct_on?: InputMaybe<Array<Product_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Product_Order_By>>;
  where?: InputMaybe<Product_Bool_Exp>;
};


export type Subscription_RootRecommendedArgs = {
  distinct_on?: InputMaybe<Array<Recommended_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Recommended_Order_By>>;
  where?: InputMaybe<Recommended_Bool_Exp>;
};


export type Subscription_RootRecommended_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Recommended_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Recommended_Order_By>>;
  where?: InputMaybe<Recommended_Bool_Exp>;
};


export type Subscription_RootRecommended_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootRecommended_ProductsArgs = {
  distinct_on?: InputMaybe<Array<Recommended_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Recommended_Products_Order_By>>;
  where?: InputMaybe<Recommended_Products_Bool_Exp>;
};


export type Subscription_RootRecommended_Products_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Recommended_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Recommended_Products_Order_By>>;
  where?: InputMaybe<Recommended_Products_Bool_Exp>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type CategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoriesQuery = { __typename?: 'query_root', categories: { __typename?: 'category_aggregate', nodes: Array<{ __typename?: 'category', id: any, name: string, slug: string }> } };

export type ProductFragment = { __typename?: 'product', id: any, name: string, price: any, bestseller: boolean, description: string, image: { __typename?: 'image', alt: string, height: number, id: any, size: any, src: string, width: number }, category: { __typename?: 'category', id: any, name: string } };

export type ProductsQueryVariables = Exact<{
  offset?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  categories?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
}>;


export type ProductsQuery = { __typename?: 'query_root', products: { __typename?: 'product_aggregate', nodes: Array<{ __typename?: 'product', id: any, name: string, price: any, bestseller: boolean, description: string, image: { __typename?: 'image', alt: string, height: number, id: any, size: any, src: string, width: number }, category: { __typename?: 'category', id: any, name: string } }>, aggregate?: { __typename?: 'product_aggregate_fields', count: number } | null | undefined }, featuredProduct: Array<{ __typename?: 'product', id: any, name: string, price: any, bestseller: boolean, description: string, recommendeds: Array<{ __typename?: 'recommended', productByRecommendedProductId: { __typename?: 'product', id: any, name: string, image: { __typename?: 'image', alt: string, height: number, id: any, size: any, src: string, width: number } } }>, image: { __typename?: 'image', alt: string, height: number, id: any, size: any, src: string, width: number }, category: { __typename?: 'category', id: any, name: string } }> };

export type ProductsCountQueryVariables = Exact<{
  categories?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
}>;


export type ProductsCountQuery = { __typename?: 'query_root', products: { __typename?: 'product_aggregate', aggregate?: { __typename?: 'product_aggregate_fields', count: number } | null | undefined } };

export const ProductFragmentDoc = gql`
    fragment product on product {
  id
  name
  price
  bestseller
  description
  image {
    alt
    height
    id
    size
    src
    width
  }
  category {
    id
    name
  }
}
    `;
export const CategoriesDocument = gql`
    query Categories {
  categories(distinct_on: slug) {
    nodes {
      id
      name
      slug
    }
  }
}
    `;

/**
 * __useCategoriesQuery__
 *
 * To run a query within a React component, call `useCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
      }
export function useCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
        }
export type CategoriesQueryHookResult = ReturnType<typeof useCategoriesQuery>;
export type CategoriesLazyQueryHookResult = ReturnType<typeof useCategoriesLazyQuery>;
export type CategoriesQueryResult = Apollo.QueryResult<CategoriesQuery, CategoriesQueryVariables>;
export const ProductsDocument = gql`
    query Products($offset: Int = 0, $limit: Int = 6, $categories: [String!] = "") {
  products(
    limit: $limit
    offset: $offset
    where: {category: {slug: {_in: $categories}}}
  ) {
    nodes {
      ...product
    }
    aggregate {
      count
    }
  }
  featuredProduct: product(where: {featured: {_eq: true}}, limit: 1) {
    ...product
    recommendeds {
      productByRecommendedProductId {
        id
        name
        image {
          alt
          height
          id
          size
          src
          width
        }
      }
    }
  }
}
    ${ProductFragmentDoc}`;

/**
 * __useProductsQuery__
 *
 * To run a query within a React component, call `useProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsQuery({
 *   variables: {
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *      categories: // value for 'categories'
 *   },
 * });
 */
export function useProductsQuery(baseOptions?: Apollo.QueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
      }
export function useProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
        }
export type ProductsQueryHookResult = ReturnType<typeof useProductsQuery>;
export type ProductsLazyQueryHookResult = ReturnType<typeof useProductsLazyQuery>;
export type ProductsQueryResult = Apollo.QueryResult<ProductsQuery, ProductsQueryVariables>;
export const ProductsCountDocument = gql`
    query ProductsCount($categories: [String!]) {
  products(where: {category: {slug: {_in: $categories}}}) {
    aggregate {
      count
    }
  }
}
    `;

/**
 * __useProductsCountQuery__
 *
 * To run a query within a React component, call `useProductsCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsCountQuery({
 *   variables: {
 *      categories: // value for 'categories'
 *   },
 * });
 */
export function useProductsCountQuery(baseOptions?: Apollo.QueryHookOptions<ProductsCountQuery, ProductsCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductsCountQuery, ProductsCountQueryVariables>(ProductsCountDocument, options);
      }
export function useProductsCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductsCountQuery, ProductsCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductsCountQuery, ProductsCountQueryVariables>(ProductsCountDocument, options);
        }
export type ProductsCountQueryHookResult = ReturnType<typeof useProductsCountQuery>;
export type ProductsCountLazyQueryHookResult = ReturnType<typeof useProductsCountLazyQuery>;
export type ProductsCountQueryResult = Apollo.QueryResult<ProductsCountQuery, ProductsCountQueryVariables>;