"use client";

import { User } from "../../../interface/random-user";
import styles from "./SettingsPanel.module.scss";
import Image from "next/image";

interface ISettingsPanelProps {
  user: User;
  onLogout: () => void;
}

export default function SettingsPanel({ user, onLogout }: ISettingsPanelProps) {
  return (
    <div className={styles.settings}>
      <h2>User Settings</h2>
      <div className={styles.card}>
        <div className={styles.userInfo}>
          <Image
  src={user.picture?.medium || "/default-avatar.png"}
  alt={`${user.name.first} ${user.name.last}`}
  className={styles.avatar}
  width={80}
  height={80}
  priority={true}
/>
          <div>
            <p>
              <strong>Name:</strong> {user?.name?.title} {user?.name?.first} {user?.name?.last}
            </p>
            <p>
              <strong>Email:</strong> {user?.email}
            </p>
            <p>
              <strong>Phone:</strong> {user?.phone}
            </p>
            <p>
              <strong>Location:</strong> {user?.location?.city}, {user?.location?.state}, {user?.location?.country}
            </p>
            <p>
              <strong>Nationality:</strong> {user?.nat}
            </p>
            <p>
              <strong>Age:</strong> {user?.dob?.age}
            </p>
          </div>
        </div>
        <button className={styles.logoutBtn} onClick={onLogout}>
          Log out
        </button>
      </div>
    </div>
  );
}
