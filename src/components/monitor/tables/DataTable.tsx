// src/components/DataTable.tsx

'use client';

import React, { useEffect, useState } from 'react';
import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from '@tanstack/react-table';
import { ArrowUpDown, ChevronDown, MoreHorizontal } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

// Defina o tipo de dados conforme o JSON fornecido
export type ReportData = {
    Date: string;
    Time: string;
    Duration: number;
    Title: string;
    StationName: string;
    StationType: number;
    AdBrandName: string;
    AdAdvertiserName: string;
    CityName: string;
    ProvinceCode: string;
    EPG: string;
    EPGCategory: string;
    EPGSubCategory: string;
    Tags: string;
    PriceValue: string;
    SpotType: number;
    StationNetworkName: string;
    AdCategoryName: string;
    AdSubCategoryName: string;
    BreakEPG: number;
    BreakIndex: number;
    SubSpotType: number;
    Public_Oid: string;
};

interface DataTableProps {
    initialData: ReportData[];
}

export const columns: ColumnDef<ReportData>[] = [
    {
        accessorKey: 'Date',
        header: 'Date',
        cell: ({ getValue }) => new Date(getValue<string>()).toLocaleDateString(),
    },
    {
        accessorKey: 'Time',
        header: 'Time',
        cell: ({ getValue }) => getValue<string>(),
    },
    {
        accessorKey: 'Duration',
        header: 'Duration',
        cell: ({ getValue }) => `${getValue<number>()}s`,
    },
    {
        accessorKey: 'Title',
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
                >
                    Title
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            );
        },
        cell: ({ getValue }) => <div className="lowercase">{getValue<string>()}</div>,
    },
    {
        accessorKey: 'StationName',
        header: 'Station Name',
        cell: ({ getValue }) => getValue<string>(),
    },
    // Adicione mais colunas conforme necessário
    {
        id: 'actions',
        enableHiding: false,
        cell: ({ row }) => {
            const report = row.original;

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Ações</DropdownMenuLabel>
                        <DropdownMenuItem onClick={() => navigator.clipboard.writeText(report.Public_Oid)}>
                            Copiar Public_Oid
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Visualizar Detalhes</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            );
        },
    },
];

const DataTable: React.FC<DataTableProps> = ({ initialData }) => {
    const [data] = useState<ReportData[]>(initialData);
    const [sorting, setSorting] = useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
    const [rowSelection, setRowSelection] = useState({});

    // Carregar parâmetros do localStorage ao montar o componente
    useEffect(() => {
        const storedParams = localStorage.getItem('reportParams');
        if (storedParams) {
            const params = JSON.parse(storedParams);
            // Utilize esses parâmetros para personalizar a requisição, se necessário
            // Por exemplo, refazer a requisição com esses parâmetros
        }
    }, []);

    // Salvar parâmetros no localStorage quando necessário
    const saveParams = (params: Record<string, any>) => {
        localStorage.setItem('reportParams', JSON.stringify(params));
    };

    const table = useReactTable({
        data,
        columns,
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            rowSelection,
        },
    });

    return (
        <div className="w-full">
            <div className="flex items-center py-4">
                <Input
                    placeholder="Filter by Title..."
                    value={(table.getColumn('Title')?.getFilterValue() as string) ?? ''}
                    onChange={(event) =>
                        table.getColumn('Title')?.setFilterValue(event.target.value)
                    }
                    className="max-w-sm"
                />
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="ml-auto">
                            Columns <ChevronDown className="ml-2 h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        {table
                            .getAllColumns()
                            .filter((column) => column.getCanHide())
                            .map((column) => {
                                return (
                                    <DropdownMenuCheckboxItem
                                        key={column.id}
                                        className="capitalize"
                                        checked={column.getIsVisible()}
                                        onCheckedChange={(value) => column.toggleVisibility(!!value)}
                                    >
                                        {column.id}
                                    </DropdownMenuCheckboxItem>
                                );
                            })}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <TableHead key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                    </TableHead>
                                ))}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex items-center justify-end space-x-2 py-4">
                <div className="flex-1 text-sm text-muted-foreground">
                    {table.getFilteredSelectedRowModel().rows.length} de{' '}
                    {table.getFilteredRowModel().rows.length} linha(s) selecionada(s).
                </div>
                <div className="space-x-2">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        Anterior
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        Próxima
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default DataTable;
