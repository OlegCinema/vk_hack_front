"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ChevronDownIcon,
  ChevronLeft,
  ChevronRight,
  Copy,
  CreditCard,
  File,
  Home,
  LineChart,
  Loader2,
  MoreVertical,
  Package,
  Package2,
  Search,
  Settings,
  ShoppingCart,
  Truck,
} from "lucide-react"

import JsonView from '@uiw/react-json-view';
import JsonViewEditor from '@uiw/react-json-view/editor';
import { lightTheme } from '@uiw/react-json-view/light';
import { darkTheme } from '@uiw/react-json-view/dark';
import { TriangleArrow } from '@uiw/react-json-view/triangle-arrow';
import { TriangleSolidArrow } from '@uiw/react-json-view/triangle-solid-arrow';
import { siteConfig } from "@/config/site"
import { Badge } from "@/components/ui/badge"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ChevronsUpDownIcon } from "lucide-react"

export default function TestModels() {
  // useState
  const [isResulted, setIsResulted] = useState(false)
  const [isLoading, setLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const [resulted, setResulted] = useState({
    categoryName: null as string | null,
    shortDescription: null as string | null,
    tags: [] as string[],
  })

  const getResultFromModel = async () => {
    await new Promise((resolve) => setTimeout(resolve, 5000))

    setResulted({
      categoryName: "Индийский чай" as string,
      shortDescription:
        "Шесть основных видов чая — это разные степени ферментации растения: черный, зеленый, пуэр, белый чай, улун и желтый. Эксперты отметили, что чай ценен содержанием в нем биологически активных веществ, таких как катехины, кофеин, L-теанин, танины, теафлавины." as string,
      tags: ["Израиль", "Сирия", "США", "Владимир Павлюк"] as string[],
    })

    setIsResulted(true)
  }

  const fetcher = async () => {
    // use wait for 5 seconds

    setLoading(true)

    await getResultFromModel()

    setLoading(false)
  }

  const defaultText = "Россиянам дали советы при выборе чая. Рекомендации в честь Международного дня чая, который отмечается 15 декабря, разместил на своем сайте Роспотребнадзор. Оказалось, что чаем может называться только продукт, изготовленный из листьев camellia sinensis без каких-либо других компонентов. Шесть основных видов чая — это разные степени ферментации растения: черный, зеленый, пуэр, белый чай, улун и желтый. В первую очередь, при покупке напитка стоит обратить внимание на упаковку. Коробка должна быть целой, изготовленной из разрешенных для контакта с пищевыми продуктами материала. Также надо посмотреть на маркировку, особенно срок годности. Чайные листья должны быть примерно одного размера, оттенка и скрученности. Стебли и чайную крошку специалисты назвали плохими признаками, их быть в упаковке не должно. При заваривании цвет должен быть прозрачным и ярким, а вкус — терпким. О плохом качестве могут сказать запахи гари, плесени и сырости, аромат хорошего напитка будет нежным. Также эксперты отметили, что на вкус влияет способ заваривания чая. Ферментированные виды, к которым относят черный, пуэр и улун лучше заваривать кипятком 90 градусов Цельсия. Зеленый и белый сорта надо заливать водой температурой 75-80 градусов. А вот кипящей водой заваривать чай не стоит, вкус может получиться горьким. Также специалисты советуют пить свежий напиток, а не разбавлять кипятком заварку, тем более, не использовать несколько дней. Такой чай не только лишается полезных свойств, но и вредит: в холодном напитке активно размножаются бактерии. Эксперты отметили, что чай ценен содержанием в нем биологически активных веществ, таких как катехины, кофеин, L-теанин, танины, теафлавины. Все эти компоненты оказывают антимикробное, противовоспалительное, антиоксидантное действие."

  return (
    <main className="container gap-6 pb-8 pt-6 md:py-10">
      <>
        <h1 className="text-3xl font-extrabold p-2 leading-tight tracking-tighter md:text-4xl mb-3">
          Тестирование модели <span className="text-muted-foreground font-medium text-base">(V1)</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-6 h-screen">
          <div className="md:col-span-3 p-2">
            <div className="grid gap-2">
              <Textarea
                className="min-h-[200px] md:min-h-[400px] lg:min-h-[700px] p-4 w-full"
                placeholder="Вставьте вашу новость сюда."
                defaultValue={defaultText}
              />

              <Button
                className="max-w-[150px] w-full md:w-auto p-2"
                disabled={isLoading ? true : false}
                onClick={fetcher}
              >
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {isLoading ? "Подождите..." : "Обработать"}
              </Button>
            </div>
          </div>
          <div className="md:col-span-3 p-2">
            <Card
              className={`min-h-[200px] md:min-h-[400px] lg:min-h-[700px] w-full ${
                !isResulted && "bg-gray-100"
              }`}
            >
              {isResulted ? (
                <>
                  <CardHeader>
                    <CardTitle>Результат</CardTitle>
                    <CardDescription>
                      Результат выполнения запроса к серверу
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="mb-4">
                    <Collapsible
                      open={isOpen}
                      onOpenChange={setIsOpen}
                      className="w-[350px] space-y-2"
                    >
                      <div className="grid w-full items-center gap-4 mb-4">
                        <div className="flex flex-col space-y-1.5">
                          <Label htmlFor="name">Категория статьи</Label>
                          <Input
                            id="name"
                            readOnly={true}
                            className="max-w-[200px] md:max-w-[400px]"
                            defaultValue={resulted.categoryName || "Неизвестно"}
                          />
                        </div>
                        <div>
                          <Label htmlFor="framework">Теги для статьи</Label>
                          <div className="flex flex-wrap mt-2 max-w-[100px] md:max-w-[400px]">
                            {resulted.tags.map((tag, index) => (
                              <Badge className="mr-2 mt-1">{tag}</Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      <CollapsibleTrigger asChild className="mt-4">
                        <Button variant="ghost" size="sm" className="p-2">
                          <ChevronsUpDownIcon className="h-4 w-4 mr-2" />
                          Короткое описание
                        </Button>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="space-y-2 mt-5">
                        <p>{resulted.shortDescription}</p>
                      </CollapsibleContent>
                    </Collapsible>
                    <JsonView collapsed={true} className="mt-100" value={resulted} />
                  </CardContent>
                </>
              ) : (
                <CardContent className="text-lg text-muted-foreground mt-4">
                  <div className="flex h-full w-full items-center justify-center">
                    {!isLoading && <p>Пока что данных нет.</p>}
                    {isLoading && (
                      <div className="flex w-full justify-center">
                        <p className="ml-3">Выполняем загрузку... </p>
                        <Loader2 className="mr-5 h-300 w-300 animate-spin" />{" "}
                      </div>
                    )}
                  </div>
                </CardContent>
              )}
            </Card>
          </div>
        </div>
      </>
    </main>
  )
}
