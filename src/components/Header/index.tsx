import logoImage from "../../assets/logo.svg"

export function Header() {
    return (
        <header className="flex justify-center py-16 bg-gray-700">
            <img src={logoImage} />
        </header>
    )
}