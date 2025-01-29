import Button from "./Button";

/**
 * Project card component, showing the details of the project that completed
 * @param //TODO
 */
//TODO Need to implement prop passing, assests URL
const ProjectCard = () => {
  return (
    <>
      <div
        className="
        flex flex-row max-w-full border-4 border-[#494d56] relative
        Laptop:flex-col Laptop:max-w-64 Laptop:bg-none"
      >
        {/* //<> Header section for all mobile screens */}
        <div
          className="absolute inset-0 
          bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABLFBMVEUGq53///8dHRvqUiMFr6AeEQ8dGRcAqpweDg0RfXYdFRQCsKQRcWgXWFEdGxkZPjgaAAAbJCISdW4MnpMAqJweAAAAopMAq5sUTUkAo5f7//0Jqp4aAAMaMS4eGxsArqQLkIUeCAAVX1kaCQERdGcaNzIPhn3c8/Ko3NjvTx8osajxTBGd1NFRvLO2490dAAcZR0IbHxkTYFYNl44VY2AYQTYaOjIRbWgXJiINmowcEhUXVlMPfnIVT0UaFxwXIR2S2NDH6+nl9vR+zcWmcFOYeFzgUyBrxb+Bg2jaVihviXHNXi1ZkXvHYTC5ZULtQgC1aTrzyLv94djEi21AmYHlbUXqjXHogmDunYbntqSTeF7FsqP/9O1riHWJfmCjck8AiGWWw7Wvak17hnU3BkQuAAALJElEQVR4nO2dC1vbthrHbVCiJMpoShwZW1DDgMRxsCllHYXRQ5wMUnqj63puO1t7Tvf9v8ORJdm5kttKovjR72lLTWzF/7zSe5FsR9MUCoViLggx6T/LPosY0M+9L/S/OLZBhHC5rMX7j2hn+sb+OqRa7OXsskrfmn36u8UhzibbxQTkcutx6Xh7u7TxNK8hTYPD7XDgw6uLQC8rmT72Ls6c6OMFZ6XMALmSMbE9p1jKFAprJ2trJydP9nJ5pFlD7XBK1sOri0DfFdYGyO1AKhEUM4MvrG1PMiEhh3t9R1SeAas01A5vbHkK17KHzpwKweFga5W8cY/CJdqQWnETjFJ4MqmXojNxzJNMLpcVbVk5ORRulCjHQu3GVY/C7VKXSeNw/wk7JHOY360ecomF4rYYeBuicbFZWazCjccIAOd0S6iqnCYKt2dw8HluruwjRD8hjSvMHl5uMi53mMSNnTzfPpjstr4JiULmP9FTfloXlyBWWJo+bqFH/OhSmTX2A29gH3Gc5+zV7HOxDcwHE9V/Vr0KaXTkVrgo9iicOjdBwoQ/omgLiLaORW8U+rOPFhXq47PqU2ga3NkXvp/DhuCUH5wpik3uRHOn4p1ihegBZIxhwIag9BcUVvkRuTxv67SSjajsineSQ6G2zRWezaPwknfL3C7vD+UXOxEvdsU7SaEw6Vn5eRRuCu97Lg4RHiV+JykUEiGrUtbmUPgDD6fH5dHvtHyFxAQaj9iF5yhRuF/uMt6rgmdCoTFyv6UrpBEf7PKgvFba7clLS92kZnwWAr7nCrdHx5clK+RZW44JPKlsjq4tKqO7X0yssDRawrIVJmRza9XoHFKrcGNrl+dTcygU4/Ae3ySLwrXsxdapo/UozCWstsInhdyF0FooFRGJFZ5cVPMJ43PlpJfK6WmuDorFn05EsVqpkp54mJhkQg4e23B79HzV0qNFVP45B6I6eAG02WuLJOIbI229fIXRliM6WuV8npzmTNgwHq79dbMcCsH5Mfcu1Xny0gN+xF5cLr3cinh6yVuQQ6GJ9lnQz8xT44N8X22hoexFgbJ3JpNCDaxxhXPVFtV9rvCSjVwCeAOZTbkUvtgQZzXHPA3mXTxTZBqIdnzCBOflUviYVRe5g7lmovhE1MYh1xDXmrviVakUzmdD8FKEfOZqUNyAiB1yKCToiivszmL01ofl8VOcIM8Pye4QABD5G+vw2R+lihYEcRsWnoFufVjZjqkcjG2LOGImv3B1lt98zDdym0KRHAo1cMU++MJPYNTKTOwW7wPkK3zHjUwunsTPmCInkkQh2mGnUXg6l0INbQ0uw1SqQC6FYIttFnYAmkeh5rysbPQcsFEpJnqWpvCnCqv9skLhJd8s0by0khukkp/oWFH18V4my9dgCqWTKkrWstFhibV8uOBZfbIraj/xvlBsYnJ6mR8CTq4zAKoWH13lSvsXh99VnR41TvWStVh1HkjKPcR+IKmR4nMioz7q6QqpaBqY/gH93dEUVcai1pwUCoVCoVAoFAqFQqFQKBQKhUKhUCgUCkW6IdLcAf9QwAWvkC8e2LRSvoKMQ29Bd54uC/Oohpd9Dg8KREd6mG6JVkvX/VT3U9jUdd1b0AM1loKh6ZHEFFuRwDZVaIMUWxH6TSYxxVaEYcqtaDp+K6QSWzC1Ei03smGaJUK/FjCJNTxTneEAc0XqEsN0wxqTOFNyg/DPeEXqEsP1WjZTqAdTSwTmdb1xY62GFU2j1REKdXe6Z/gg89V6fX19/dbklRc0pI410CN2rFBvWhOtAh3w+jbSt75ef0MAIYblt+XO+8ygoyd0JlrDeXvb4AKpxHeOabRdX3I3DDW7q5AWGhNqfvA+1kcV3n04Cnwstz6K4Xcl2pOz8FeJBe9uf/n4q+T2Y8C222tFNP4OCfKpIfT9/ePv/7hr/Dz9Q6GWhmnVgh6JLWO8VSCzYf2fH+1/3dH/Nr6sgkTYa0Oa3Iwdis67SGLjl3/f8e7a+G3BdyXNAfS8XoV6OD4sXkfK6h/K8XhsvFrwTTuzA/2w3SdxVOQ3IYSmCQ3s/YcPRO1tI5b4WnqJ2G719VO9OZi/QWh57SPXdYOW/vsdk/UJ/dGVKEVHJTDCHHWrldHRB+j0WZHK63G3zRvmaq4R+pxIfCuDFR0vgmCM4WAMI1ZzUKLfsws0gp5B6phf2Qh8gzTnSyLxkwRWJJ7faQahbdeCpodxf2DH7pDEZAfDY/ar/fd/0Y+2iV4xXQ3skG6CU/8kQS0FDdpJqadgYsI2wV1TQhQOKkysCIWjbXGFHajxmN/4k/Z4800i8VwCiQwIDdJmJW/tyLcMUeLRbmoPSTT4/v0v+JCYPOZ/BVHtdRMrXJdEIu2rtIuec0PqdtCBVmRKgodGorAiDvp/SSCN+UzTDR16xMSJEW/kWACBXjvUW8GRr3VqwnU0EbagiTtDRoysaJL+X7Wok0W/1bl3iRoEn2JvQytiGfI3Gtiw5Ufi7Fr3tN0OwtgasBazIhwIJEHUdXmsr7N0zQTdYuN22eooyG+3Oz4q486gHOpi3Zo+iF8ecLId1nO5wneIzUj11Itvlq1PM2nE8P0m66cDp26LvwO/8/t3s9lYc255EMQIXte7AiPRy1bIsksIaT91W0P2Gk3/fgHLddAXPhD/4DNSzJOKn+8liPxadI88zaAdasop6Lcr66Sa+aeogpPy4jaR+FWG/E1jURFb1gymFCDmLZ2u/+QGfI2uk/ztC5LCo3odNwyDwHWnsmMXfvKm06fvM62YwdfEntdSRH46FgEVORwCx2LrIqj35KONa4MpQvxX9frN62UK60IlUixvKOMeL1Gs3oiYTw32FceP6mApav3msyTfpQL9puigM5mxFZeNor6/Pe/xK8Ztoy4MKgNGZETNb8/masJ4Bc4QzrQvTyt/wQv7KpipMEy/GdRmUujG9ZbzRqSmfbFBjliYAGl6w0riGRQmlb/Dc7W63DOJNCaa1Ns4R1MLtJPZG+c1T03fS9UrhzH9YKZO2uxOfZyLgSj3qgWk1TAigI7GqXqqbXf9CtF4bc9rRHmBUSJu4PKUHbXT82z4OMB/lnogMqAX+Rp7Ciu6vbMU6DOb22/IrxD6QVhrTTMaw/6rUWjMrzfen0tSSYwjivyWhdFwfT/GgloU8xvvZJgGng6I/QlWtDuD1xOhD2/RytzLQIeibo+RaOvB8Fo2WRn7adFY9Izz8H6FLQ9P8WxAqaFjccSEcGzBtiV3WJ8KCO73MBOW9VcDgu/ro65jpuKeGtMYXQinRR+Nbe1R+gKa1C37zL4R0BthQdcbf9HJKgHB0Gx+4FurcDXXlAxYsBU2fWykZfxFWL5QFgRu20fQwimyXkR8FUYTW9iARmp8i8Ak8Rp2bUHfYbpoDBLXTJOvDV5FTCu5dDalJuzJttspG34Mw6iFsURbjutEvi3QDzw/NuFRCkeh4XdwIlBfmdmI6YG+hv1WfMFJiFNoQwh9F8Um7KTRz2gQ4ThU2OkMFRquhWJ6rZmiLLsH7B7FZS9K4SiMqvo2TPzMsk/mIYC+j2tNO735DLti9kgsqU26WW1FgV7T1Fk8nP7W2NUCelYzDKJVtXTWTVq03FQzdOpN7dHf+Z0CYNs7CpstPUinn9Gi1Bvbnt3uuzcmZZh+SBWmsjIUmC5222EzpTmpFn3JrYtbOI2VYQxsIt/1wtme9rFKEOJbLmmmszJkQGSYbeymNdpHwOhuvZQm3QkEyv3Ajm9B6gUqFAqFQqFQKBQKhUKhUCgUCoVCoVAoFAqFQqFQKBQKhUKhUCgUCoViEfwfhLMv6mCCUcsAAAAASUVORK5CYII=')]
          bg-cover bg-center opacity-15 z-0
          Laptop:invisible"
        ></div>
        {/* //<> Header section for Laptop and above */}
        <div
          className="
        border-b-2 border-[#494d56] w-0 invisible
        Laptop:h-52 Laptop:w-full Laptop:visible"
        >
          <img
            src="data:image/png;base64,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"
            className=" w-full h-full object-fill"
            alt="logo"
          />
        </div>
        {/* //<> Middle section of the project card */}
        <div
          className="
        flex flex-col justify-around border-r-2 border-[#494d56] text-slate-400 p-1
        Laptop:flex-row Laptop:items-center Laptop:border-b-2 Laptop:border-r-0"
        >
          <div>HTML</div>
          <div>CSS</div>
          <div>Python</div>
          <div>Flask</div>
        </div>
        {/* //<> Footer section that contains two buttons and description */}
        <div className="p-4">
          <h1 className="text-white text-lg py-3">ChertNodes</h1>
          <p className="text-slate-400 text-sm pb-3">Server hosting</p>
          <div
            className="flex flex-row justify-start gap-5 
            Laptop:gap-10"
          >
            <Button
              text="Live"
              onClick={() => {
                console.log("Live Buton");
              }}
            ></Button>
            <Button
              text="Cache"
              onClick={() => {
                console.log("Cache Button");
              }}
            ></Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
