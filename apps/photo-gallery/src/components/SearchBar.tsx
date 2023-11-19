import React, { Component } from 'react';
import { IonSearchbar } from '@ionic/react';

interface SearchBarProps {
  onSearchChange: (text: string) => void;
}

interface SearchBarState {
  searchText: string;
}

class SearchBar extends Component<SearchBarProps, SearchBarState> {
  constructor(props: SearchBarProps) {
    super(props);
    this.state = {
      searchText: '',
    };
  }

  handleSearchChange = (e: CustomEvent) => {
    const text = e.detail.value as string;
    this.setState({ searchText: text });
    this.props.onSearchChange(text);
  };

  render() {
    return (
      <IonSearchbar
        value={this.state.searchText}
        onIonInput={this.handleSearchChange}
        placeholder="Search..."
      />
    );
  }
}

export default SearchBar;
