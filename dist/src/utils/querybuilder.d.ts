declare class QueryBuilder {
    private queryBuild;
    query: any;
    private hasFiltered;
    private hasSort;
    private hasSelect;
    private hasPaginate;
    constructor(query?: string);
    filter(): this;
    sort(): this;
    select(): this;
    paginate(): this;
    build(actions?: string[]): any;
    private excludeFields;
    private selectOnlyFields;
    private normalizeMathOperatorsRecursive;
    private filterRecursive;
    private getRecursiveSelection;
}
export default QueryBuilder;
