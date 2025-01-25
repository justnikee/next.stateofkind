import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Product = {
  name: string;
  imageUrls: string[];
  id: string;
  price: number;
};

type ProductListProps = {
  products: Product[];
  loading: boolean;
};

const ProductList = ({ products, loading }: ProductListProps) => {
  return (
    <>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Image</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Price</TableHead>
          <TableHead className="text-right">Preview</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {loading ? (
          <TableRow>
            <TableCell className="relative">
              <Skeleton className="h-10 w-10 object-contain border rounded-sm" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-10 w-20" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-10 w-20" />
            </TableCell>
            <TableCell className="text-right">
              <Skeleton className="h-10 w-20"></Skeleton>
            </TableCell>
          </TableRow>
        ) : (
          <>
            {products?.map((product) => (
              <TableRow className="relative" key={product.id}>
                <TableCell>
                  <Image
                    className="h-10 w-10 object-contain border rounded-sm"
                    src={product.imageUrls[0]}
                    width={500}
                    height={500}
                    alt=""
                  />
                </TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>${product.price}</TableCell>
                <TableCell className="text-right">
                  <Link
                    className="flex justify-self-end z-20 relative"
                    href={`/product/${product.id}`}
                  >
                    <Button>Preview</Button>
                  </Link>
                </TableCell>
                <Link
                  className="absolute z-10 left-0 top-0 w-full h-full"
                  href={`/admin/products/${product.id}`}
                />
              </TableRow>
            ))}
          </>
        )}
      </TableBody>
    </Table>
    </>
  );
};

export default ProductList;
