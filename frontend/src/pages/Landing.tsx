import Loading from "@/components/Loading"
import Header1 from "@/components/mvpblocks/header-1"
import type { RootState } from "@/redux/store"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const Landing = () => {
  const loading = useSelector((state: RootState) => state.auth.loading)
  const accessToken = useSelector((state: RootState) => state.auth.accessToken)

  const navigate = useNavigate()

  useEffect(() => {
    if (!loading) {
      if (accessToken) {
        navigate("/dashboard")
      }
    }
  }, [accessToken, loading])

  if (loading) {
    return (
      <Loading />
    )
  }

  return (
    <div className="">
      <Header1 />
    </div>
  )
}

export default Landing