import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <div className="flex min-h-svh p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <div>
          <h1 className="font-medium">Viva la amistad</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a molestie arcu, vel dictum massa. Mauris augue diam, aliquet quis egestas at, placerat at erat. Sed tincidunt enim sapien, in bibendum nunc dapibus eget. Aenean mollis, nunc sed elementum fermentum, ipsum lectus consectetur ante, nec euismod nisi nunc in dui. Mauris sed auctor arcu. Nulla cursus purus quam, at suscipit ex euismod vel. Nam a velit non dolor vestibulum fermentum. Aenean tincidunt, est ut posuere convallis, ante nibh laoreet lectus, id sodales arcu risus elementum felis. Pellentesque pretium diam condimentum cursus ullamcorper. Proin iaculis libero justo, sit amet porta orci mattis ac.

Maecenas libero urna, dapibus id dui nec, commodo bibendum enim. Aliquam quis erat eu odio interdum elementum in ut magna. Ut posuere viverra massa, sed pellentesque erat sagittis id. Suspendisse iaculis neque ut iaculis lacinia. Nunc sed sapien et massa suscipit aliquam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi ac velit iaculis, faucibus nibh maximus, ultrices sapien. Nulla pharetra diam a volutpat lobortis. Proin fringilla quam eu pretium hendrerit. Vivamus placerat posuere lobortis. Duis vitae sollicitudin eros. Quisque iaculis semper urna vitae imperdiet. Pellentesque eget felis elementum, tristique mi sit amet, lobortis metus. Donec rutrum non lacus sed finibus. Donec neque mauris, venenatis ut bibendum sed, tristique ut turpis. Duis et risus a lacus feugiat ultricies ac eleifend orci.</p>
          <p>We&apos;ve already added the button component for you.</p>
          <Button className="mt-2">Button</Button>
        </div>
        <div className="font-mono text-xs text-muted-foreground">
          (Press <kbd>d</kbd> to toggle dark mode)
        </div>
      </div>
    </div>
  )
}
