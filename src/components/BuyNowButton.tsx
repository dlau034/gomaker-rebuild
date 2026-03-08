type Props = {
  paymentLink: string;
  price: string;
};

export default function BuyNowButton({ paymentLink, price }: Props) {
  return (
    <a
      href={paymentLink}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full text-center font-medium py-4 rounded-full uppercase tracking-wide text-base transition-all active:scale-95 bg-[#06A0B4] hover:bg-[#0589A0] text-[#f5f5f5]"
    >
      Buy Now — {price}
    </a>
  );
}
