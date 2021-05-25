import CloudinaryImage from '../CloudinaryImage'

export default function Example({posts}) {
  const sorted = posts.sort(function (a, b) {
    return new Date(a.data.date).getTime() - new Date(b.data.date).getTime();
  }).reverse();
  return (
    <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-brand-blue sm:text-4xl">Updates</h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {sorted.slice(0, 3).map((post) => (
            <div key={post.data.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
              <CloudinaryImage
                src={post.data.featured_image}
                alt={post.data.featured_alt}
                width={300}
                height={200}
                className="h-48 w-full object-cover"
                transform="/w_300,h_200,c_fill,g_auto"
                layout="responsive"
              />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  {/* <p className="text-sm font-medium text-indigo-600">
                    <a href={post.category.href} className="hover:underline">
                      {post.category.name}
                    </a>
                  </p> */}
                  <a href={post.href} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">{post.data.title}</p>
                    <p className="mt-3 text-base text-gray-500">{post.description}</p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <time dateTime={post.datetime}>{post.date}</time>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
