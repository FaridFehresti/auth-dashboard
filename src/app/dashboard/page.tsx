"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./Dashboard.module.scss";
import {
    FiHome,
    FiBarChart2,
    FiSettings,
    FiChevronLeft,
    FiChevronRight,
} from "react-icons/fi";
import FlexShowcase from "./components/FlexShowcase";
import GridShowcase from "./components/GridShowcase";
import SettingsPanel from "./components/SettingsPanel";

const menuItems = [
    { id: "flex", label: "Flex Showcase", icon: <FiHome /> },
    { id: "grid", label: "Grid Showcase", icon: <FiBarChart2 /> },
    { id: "settings", label: "Settings", icon: <FiSettings /> },
];
import Image from "next/image";
import { useUser } from "../../context/UserContext";

export default function Dashboard() {
    const { user, setUser } = useUser();
    const router = useRouter();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState("settings");
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
        setHydrated(true);
    }, []);

    useEffect(() => {
        if (hydrated && !user) {
            router.replace("/auth");
        }
    }, [hydrated, user, router]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 780) {
                setSidebarCollapsed(true);
            } else {
                setSidebarCollapsed(false);
            }
        };

        handleResize(); 
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    if (!hydrated) return null;
    if (!user) return <p  style={{ textAlign: "center", marginTop: "50px", width: "100%", height:"100%", fontSize: "24px", display: "flex", justifyContent: "center", alignItems: "center" }}>Redirecting...</p>;

    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem("user");
        router.replace("/auth");
    };

    const renderContent = () => {
        switch (activeMenu) {
            case "flex":
                return <FlexShowcase />;
            case "grid":
                return <GridShowcase />;
            case "settings":
                return <SettingsPanel user={user} onLogout={handleLogout} />;
            default:
                return null;
        }
    };

    return (
        <div className={styles.dashboard}>
            <aside
                className={`${styles.sidebar} ${
                    sidebarCollapsed ? styles.collapsed : ""
                }`}
            >
                <div className={styles.sidebarHeader}>
                    {!sidebarCollapsed && (
                        <h2 className={styles.logo}>Farid Tech Dashboard</h2>
                    )}
                    <button
                        className={styles.collapseBtn}
                        onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                    >
                        {sidebarCollapsed ? (
                            <FiChevronRight />
                        ) : (
                            <FiChevronLeft />
                        )}
                    </button>
                </div>
                <nav>
                    <ul>
                        {menuItems.map((item) => (
                            <li
                                key={item.id}
                                className={
                                    activeMenu === item.id ? styles.active : ""
                                }
                                onClick={() => setActiveMenu(item.id)}
                                title={sidebarCollapsed ? item.label : ""}
                            >
                                {item.icon}
                                {!sidebarCollapsed && <span>{item.label}</span>}
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>

            <main className={styles.main}>
                <header className={styles.header}>
                    <div className={styles.userMenu}>
                        <button
                            className={styles.userBtn}
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                        >
                            {user.email}{" "}
                            <Image
                                src={
                                    user.picture?.medium ||
                                    "/default-avatar.png"
                                }
                                alt={`${user.name.first} ${user.name.last}`}
                                className={styles.avatar}
                                width={80}
                                height={80}
                                priority={true}
                            />
                        </button>
                        {dropdownOpen && (
                            <div className={styles.dropdown}>
                                <p>{user.email}</p>
                                <button onClick={handleLogout}>Log out</button>
                            </div>
                        )}
                    </div>
                </header>
                <section className={styles.content}>{renderContent()}</section>
            </main>
        </div>
    );
}
